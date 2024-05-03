import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-between'>
        <div style={{backgroundColor:"red"}}>hi</div>
        <div style={{backgroundColor:"yellow"}}>hi</div>
        <div style={{backgroundColor:"blue"}}>hi</div>
        <div style={{backgroundColor:"yellow"}}>hi</div>
        <div style={{backgroundColor:"violet"}}>hi</div>
    </div> <br />

    {/* flex */}

    <div className='flex justify-between'>
        <div className='bg-red-500'>hi</div>
        <div className='bg-yellow-500'>hi</div>
        <div className='bg-blue-500'>hi</div>
        <div style={{backgroundColor:"yellow"}}>hi</div>
        <div style={{backgroundColor:"violet"}}>hi</div>
    </div>

{/* grids */}
    <div className='grid grid-cols-10'>
      <div className='col-span-4'>hey1</div>
      <div className='col-span-4'>hey2</div>
      <div className='col-span-4'>hey3</div>
      <div className='col-span-4'>hey4</div>
      <div className='col-span-4'>hey5</div>
    </div>

   {/* responsiveness*/}
   <div className='grid grid-cols-1 justify-between md:grid-cols-5 text-base'>
     
    <div className='bg-red-500'>yo1</div>
    <div className='bg-yellow-500'>yo2</div>
    <div className='bg-green-500'>yo3</div>
    <div className='bg-blue-500'>yo4</div>
    <div className='bg-slate-500'>yo5</div>
   </div>
 <br /><br />
    <div className='rounded-sm'>
      <div className='bg-red-500'>yo1</div>
      <div className='bg-yellow-500'>yo2</div>
      <div className='bg-green-500'>yo3</div>
      <div className='bg-blue-500'>yo4</div>
      <div className='bg-slate-500'>yo5</div>

    </div>
    </>
  )
}

export default App
