import { useState } from 'react'

import Header from './components/Header'
import Todos from './components/Todos';
let counter=4;

function App() {



  const [todos, setTodos] = useState([{
    id: 1,
    title: "Work",
    description: "Just kidding"
  },
  {
    id: 2,
    title: "Run ",
    description: "Just kidding"
  }, {
    id: 3,
    title: "Lift",
    description: "Just kidding"
  }]);


  function AddTodo(){
    setTodos([...todos,{id:counter++,
    title:counter, description:"Ofcourse it works, i wrote it for the "+(counter-4)+"th time"}])
  }

  return <div>
    <button onClick={AddTodo}>Add new</button>
    {todos.map(todo=>{
      return <Todos key={todo.id} title={todo.title} description={todo.description}></Todos>
    })
    
    }

    

  </div>

}


export default App
