
const mongoose = require('mongoose');
const dotenv=require('dotenv')
dotenv.config();
const connect=async function(){
    try{
       await mongoose.connect(process.env.url);
       console.log("Database connected");
    }
    catch(err)
    {
        console.error("database connection error",err);
    }
}
const { Schema } = mongoose;

const todoSchema = new Schema({
 title:String,
 description:String,
 completed:Boolean
});
const Todo = mongoose.model('Todo',todoSchema);
module.exports={connect,Todo};
