import { useEffect, useState } from 'react';

// the useInterval has 2 parameteres one is a function, another is the timout;
// the function is  the job it does, for every timeout 

// fn () the function executed, present inside the useEffect in the custom hook

// timeout: every 'timout' milliseconds the function runs again 

const useInterval=(fn,timeout)=>{

   useEffect(()=>{
    const int3=setInterval(()=>{
        fn();
    },timeout);


   },[])
   return ()=>{
    clearInterval(int3);
   }

}

function Interval() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}

export default Interval;