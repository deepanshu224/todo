const {Todo}=require('./util/db.js');
const {addtodo,updatetodo}=require('./zod.js')
const posttodo=async(req,res)=>{
   try{
    const payload=req.body;
    const parseData = addtodo.safeParse(payload);
    console.log(parseData.success);
    if(!parseData.success)
    {
       return res.json({
            "msg":"wrong input"
        })
    }
    const {title,description}=req.body;
    const todo=new Todo({
        title:title,
        description:description,
        completed:false
    })
    await todo.save();
    res.json({
        "msg":"todo added succesfully"
    })
}
catch(err)
{
    console.error("some issue"+err);
}
}
const gettodo=async(req,res)=>{
    const ob=await Todo.find({});
    res.json({
        ob
    })
}

const update=async(req,res)=> {
    const payload=req.body;

    const parseData = updatetodo.safeParse(payload);
    if(!parseData.success)
    {
       return res.json({
            msg:"wrong input"
        })
    }
    const updatedtodo=await Todo.findByIdAndUpdate(req.body.id,
        {
            completed:true
        }
    )
    res.json({
         msg:"Marked as completed"
    })
}
module.exports={
    posttodo,
    update,
    gettodo
}