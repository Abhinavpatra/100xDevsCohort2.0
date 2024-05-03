import React, { useState } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go there from 7-9",
      completed: false,
    },
    {
      title: "Study DSA",
      description: "Study DSA from 9-11",
      completed: false,
    }
  ]);
  function addTodo(){
    setTodos([...todos,{
      title:"abcd",
      description:"efgh",

    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a new todo</button>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

// Todo component
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
