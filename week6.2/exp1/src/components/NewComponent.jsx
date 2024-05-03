import { useState, useEffect } from "react";

export default function NewComponent({ id }) {
  const [todo, setTodo] = useState(null); 

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function (res) {
        const data = await res.json();
        setTodo(data.todo); 
      });
  }, [id]); 

  return (
    <div>
      {todo && (
        <>
          <h1>{todo.title}</h1>
          <h4>{todo.description}</h4>
        </>
      )}
    </div>
  );
}
