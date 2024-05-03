import React, { useState, useMemo } from 'react'
import CardWrapper from './components/CardWrapper'

const MemoizedCardWrapper = React.memo(CardWrapper);

function App() {
  let d1="";

  function AddContent(){
    setData(d1);
    d1="";
  }

  const[data,setData]=useState("")

  const memoizedCardWrapper1 = useMemo(() => <MemoizedCardWrapper title={data}></MemoizedCardWrapper>, [data]);
  const memoizedCardWrapper2 = useMemo(() => <MemoizedCardWrapper title={"boogivoogi"}></MemoizedCardWrapper>, []);
  const memoizedCardWrapper3 = useMemo(() => <MemoizedCardWrapper title={"abracadabra"}></MemoizedCardWrapper>, []);

  return <>
    <input type="text" placeholder='hi' onChange={(e) =>d1=e.target.value} ></input>
    <button onClick={AddContent} onKeyDown={AddContent} >Change</button>
    {memoizedCardWrapper1} <br /> <hr style={{ boxShadow: "10px 5px 5px black" }} /> <br />
    {memoizedCardWrapper2}
    {memoizedCardWrapper3}
  </>
}

export default App



// import { useState } from 'react'
// import CardWrapper from './components/CardWrapper'
// function App() {
//   let d1="";

// function AddContent(){
//   setData(d1);
//   d1="";
// }

// const[data,setData]=useState("")
//   return <>
//     <input type="text" placeholder='hi' onChange={(e) =>d1=e.target.value} ></input>
//       <button onClick={AddContent} onKeyDown={AddContent} >Change</button>
//     <CardWrapper title={data}></CardWrapper> <br /> <hr style={{ boxShadow: "10px 5px 5px black" }} /> <br />
    
//     <CardWrapper title={"boogivoogi"}> </CardWrapper>
//     <CardWrapper title={"abracadabra"}> </CardWrapper>
//   </>


// }

// export default App
