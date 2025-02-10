import { useState } from 'react';
const Addtodo = function() {
    const[Title,settitle]=useState("")
    const[Description,setdescription]=useState("");
    return (
        <div>
            <input type="text" placeholder="title" onChange={function(e){
                settitle(e.target.value);
            }} /><br />
            <input type="text" placeholder="description"onChange={function(e){
                setdescription(e.target.value);
            }} /><br />
            <button onClick={async()=>{
                const response=await fetch("http://localhost:3000/",{
                    method:"POST",
                    body:JSON.stringify({
                        title:Title,
                        description:Description
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                const data=await response.json()
                console.log(data);
                alert("Todo added");

            }}>Add a todo</button>
        </div>
    );
}

export { Addtodo };
