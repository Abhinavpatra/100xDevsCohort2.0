import { useState, useEffect } from 'react'
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async function(res){
          const json = await res.json();
          setTodos(json.todos);
        })
    }, 10000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        {todos.map(t => <Todos key={t.id} title={t.title} description={t.description}></Todos>)}
      </div>
    </>
  )
}

export default App



// import { useState,useEffect } from 'react'
// import Todos from './components/Todos';


// function App() {
// const [a,setA]=useState(0);
// setInterval(setA(a+1),10000);
// const [todos,setTodos]=useState([]);
// useEffect(()=>{
//   fetch("https://sum-server.100xdevs.com/todos")
//     .then(async function(res){
//       const jso=await res.json();
//       setTodos(jso.todos);
//     } )
// },[a])

//   return (
//     <>
//      <div>
//       {todos.map((t)=><Todos key={t.id}title={t.title} description={t.description}></Todos>)}
//      </div>
//     </>
//   )
// }

// export default App
