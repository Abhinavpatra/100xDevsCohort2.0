import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//jsx is a combination of jsvascript and html and we can return an html 
  return (
   <div>
    <button onClick={()=>setCount((count)=> count+1)}>
      count is {count}

    </button>
    

   </div>
  )
}
/* dynamic websites
when we write a lot of JS code that does DOM manipulation   */
export default App
// any variable that react acitvely needs to aggressively look at 