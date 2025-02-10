const { z } =require('zod');

const addtodo = z.object({
    title:z.string(),
    description:z.string(),
});
const updatetodo = z.object({
   id:z.string()
});
module.exports={
    addtodo,
    updatetodo
}