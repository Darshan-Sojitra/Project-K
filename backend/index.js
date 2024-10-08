import express from 'express'
import mongodb from 'mongoose'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import {userinput} from './types.js'
import { Admin, Answer, Question, User } from './db.js';
import { v4 as uuidv4 } from 'uuid';



const SECRET = 'Secret';
const app = express();

const port = 3000;

const ROLES = {
    ADMIN: 'admin',
    USER: 'user'
};


app.use(cors());
app.use(express.json());

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.auhtentication;
    if (authHeader) {
        const token = authHeader;
        jwt.verify(token, SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        })
    } else {
        res.sendStatus(401);
    }
}

app.post('/admin/signup', async (req, res) => {
    const { username, password } = req.body;
    const payload = { username, password };
    const parsedPayload = userinput.safeParse(payload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "Invalid Input"
        })
    } else {
        const admin = await Admin.findOne({ username });
        if (admin) {
            return res.status(403).json({
                message: "Amin already exists"
            });
        } else {
            const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: "1h" });
            const newadmin = await new Admin({id: uuidv4(), username: username, password: password, role: ROLES.ADMIN });
            await newadmin.save();


            res.json({ message: "ADmin created successfully", token });
        }
    }

})

app.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;
    const payload = { username, password };
    const parsedPayload = userinput.safeParse(payload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "Invalid Input"
        })  
    } else {
        const admin = await Admin.findOne({ username: username, password: password, role: ROLES.ADMIN })
        if (admin) {
            const token = jwt.sign({ username: username, role: ROLES.ADMIN }, SECRET, { expiresIn: '1h' })
            res.json({          
                 message: "Admin login successfully", token:token 
            })
        } else {
            res.json({message: "invalid admin credentials"})
            
            
        }
    }
})

app.post('/users/signup', async (req, res) => {
    const { username, password } = req.body;
    const payload = { username, password };
    const parsedParsed = userinput.safeParse(payload);
    if (!parsedParsed.success) {
        return res.status(411).json({
            message: "Invalid Input"
        })
    } else {
        const user = await User.findOne({ username: username })
        if (user) {
            res.json({
                message: "User already exists"
            })
        } else {
            const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: "1h" });
            const newUser = await new User({id: uuidv4(), username: username, password: password, role: ROLES.USER });
            await newUser.save();

            res.json({
                messgae: "New USer created"
                , token
            })
        }


    }
})

app.post('/users/login', async (req, res) => {
    const { username, password } = req.body;
    const payload = { username, password };
    console.log(username,password)
    const parsedPayload = userinput.safeParse(payload);
    if (!parsedPayload.success) {
        res.status(411).json({ messgae: "Invalid Input" });
        return;
    } else {
        const user = await User.findOne({ username, password,})
        
        if (user) {
            
            const token = jwt.sign({ username: username, role: ROLES.USER }, SECRET, { expiresIn: '1h' })
            return res.json({          
                 message: "Users login successfully", token:token 
            })
        } else {
            console.log("not")
            return res.status(401).json({message: "invalid admin credentials"})
            
            
        }
    }
})


app.post('/newquestion', authenticateJWT, async (req, res) => {
    try {
        const {questiondes, questionText , tags} = req.body;

        if (!questionText) {
            return res.status(400).json({ message: "Question text is required" });

        }

         // Find the user by username in both User and Admin collections
         const user = await User.findOne({ username: req.user.username });
         const admin = await Admin.findOne({ username: req.user.username });
 
         // Check if neither user nor admin was found
         if (!user && !admin) {
             return res.status(404).json({ message: "User or Admin not found" });
         }
 
         // Determine the author ID based on who was found
         const authorId = user ? user._id : admin._id;

        //create and save the new question
        const newQuestion = new Question({
            id: uuidv4(),
            tags:tags,
            questionText: questionText,
            questiondes: questiondes,
            author: authorId
        });

        await newQuestion.save();

        res.status(201).json({ message: "Question crested successfuly", question: newQuestion });
    } catch (error) {
        res.status(500).json({ messgae: "Internal server error", error: error.message });
    }

})


app.get('/question',authenticateJWT, async (req, res) => {
    try {
        //fetch all the questions
        const questions = await Question.find().populate('author', 'username').exec();

        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ messgae: "Internal server error" })
    }


})

app.get('/questions/:questionId',authenticateJWT, async (req, res) => {
    try {
        const question = await Question.findById(req.params.questionId).populate({
            path: 'answer', 
            populate: { path: 'author', select: 'username' }  // Optionally populate the author details
        });

        if (!question) { 
            return res.status(404).json({ message: "Question not found" });
        }

        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

app.post('/questions/:questionId/answer',authenticateJWT,async(req,res)=>{
    try{
        const {answerText} = req.body;
        const questionId= req.params.questionId;
    
        if(!answerText){
            return res.status(400).json({messsage:"Answer TExt is required"})
        }
        //
        const question = await Question.findById(questionId);
        if(!question){
            return res.status(400).json({message:"Question was not found"})
        } 

        const user = await User.findOne({username:req.user.username});
        const admin = await Admin.findOne({username:req.user.username});

        if(!user && !admin){
            return res.status(404).json({
                message:"User or Admin not found"
            })
        }

        const authorId = user? user._id :admin._id;

        const newAnswer= new Answer ({
            answerText:answerText,
            author:authorId,
            question:questionId
        })

        await newAnswer.save();
        question.answer.push(newAnswer._id);
        await question.save();

        res.status(201).json({
            message: "Answer submitted successfully", answer: newAnswer 
        })

    }catch{
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
})


app.listen(3000,()=>console.log(`Running on port ${port}`));