import mongoose from 'mongoose';

mongoose.connect ("mongodb+srv://darshan:darshan123@cluster0.gttsu44.mongodb.net/clgproject",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to MongoDb successfully");
}).catch(err=>{
    console.error("Error connecting to MongoDb",err);
});



const adminSchema = new mongoose.Schema({
    username:{type:String, required:true, unique:ture},
    password:{type:String , required:true}
})

const userSchema = new mongoose.Schema({
    username:{type:String, required:true, unique:ture},
    password:{type:String , required:true}
})

const questionSchema = new mongoose.Schema({
    question:{type:String,required:true},
    answer:{type:Array}
})

export const Admin  = mongoose.model('Admin',adminSchema);
export const User = mongoose.model('User',userSchema);