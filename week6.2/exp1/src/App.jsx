import React from 'react';
import { useState } from 'react';
import NewComponent from './components/NewComponent'

function App() {
  const [id,setId]=useState(0);
  return <>
  <div>
    <button onClick={()=>{setId(1)}}>1</button>
    <button onClick={()=>{setId(2)}}>2</button>
    <button onClick={()=>{setId(3)}}>3</button>
    <button onClick={()=>{setId(4)}}>4</button>
    <button onClick={()=>{setId(5)}}>5</button>
  </div> 
   <NewComponent id={id}></NewComponent>
</>
}

export default App;

