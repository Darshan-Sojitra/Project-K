import mongoose from 'mongoose';

mongoose.connect ("mongodb+srv://darshan:darshan123@cluster0.gttsu44.mongodb.net/clgproject",{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to MongoDb successfully");
}).catch(err=>{
    console.error("Error connecting to MongoDb",err);
});

// import mongoose from 'mongoose';
// import { v4 as uuidv4 } from 'uuid';  // For generating UUIDs

// Define the schema for Users
const UserSchema = new mongoose.Schema({
  id: { type: String,  unique: true },  // Custom 'id' field
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' }
});

// Define the schema for Admins
const AdminSchema = new mongoose.Schema({
  id: { type: String,  unique: true },  // Custom 'id' field
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'admin' }
});

// Define the schema for Questions
const QuestionSchema = new mongoose.Schema({
  id: { type: String, unique: true },  // Custom 'id' field
  tags:[String],
  questionText: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

// Define the models
const User = mongoose.model('User', UserSchema);
const Admin = mongoose.model('Admin', AdminSchema);
const Question = mongoose.model('Question', QuestionSchema);

export { User, Admin, Question };

// const UserSchema = new mongoose.Schema({
//     id:{type:String,unique:true},
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ['admin', 'user'], default: 'user' }
//   });
  

// const adminSchema = new mongoose.Schema({
//     username:{type:String, required:true, unique:ture},
//     password:{type:String , required:true}
// })

// const userSchema = new mongoose.Schema({
//     username:{type:String, required:true, unique:ture},
//     password:{type:String , required:true}
// })

// const questionSchema = new mongoose.Schema({
//     question:{type:String,required:true},
//     answer:{type:Array}
// })

// export const Admin  = mongoose.model('Admin',adminSchema);
// export const User = mongoose.model('User',UserSchema);