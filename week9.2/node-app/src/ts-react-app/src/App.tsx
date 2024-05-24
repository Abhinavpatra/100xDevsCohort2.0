import { useState } from 'react'

import './App.css'

interface TodoProp {
  title:string,
  description:string,
  done: boolean,
}
function todo(todo: TodoProp){
return <>
<div>
  <h1>
  title:{todo.title}</h1>
 <p> description:{todo.description}</p>
</div>
</>
}
function App() :JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <>
     
    </>
  )
}

export default App
