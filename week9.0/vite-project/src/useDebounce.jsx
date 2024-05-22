import { useEffect, useState } from "react"

const useDebounce=(value,delay)=>{

    const[debouncedValue,setDebouncedValue]=useState(value);

    useEffect(()=>{
        const id= setTimeout(()=>{
            setDebouncedValue(value);
        },delay);

    return ()=>{
            clearTimeout(id);
         }


    },[value,delay])
    return debouncedValue;
}

export default useDebounce;


// a function that doesn't have a use- cannot use a hook in it, that is the difference between a hook and a function
// 