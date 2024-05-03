import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo} from './components/CreateTodo'

function App() {
  const {todos,setTodos}= useState([]);
  fetch("")
  return (
    <div>
    <CreateTodo></CreateTodo>
    <Todos todos={[
      {
        title:"asd",
        description:"afvss",
        completed:false
      }
    ]}></Todos>
    </div>
  )
 
}

export default App

