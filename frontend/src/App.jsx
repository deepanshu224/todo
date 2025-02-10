import { useState } from 'react';
import 'normalize.css';
import { Addtodo } from './components/addtodo.jsx'; 
import { Todos } from './components/todos.jsx'; 
function App() {
  const[todos,settodos]=useState([])
  const ans=async()=>{
   const response= await fetch("http://localhost:3000/")
  
   const data=await response.json();
   console.log(2);
   settodos(data.ob);
  }
  ans();
  return (
    <div>
      <Addtodo /> 
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
