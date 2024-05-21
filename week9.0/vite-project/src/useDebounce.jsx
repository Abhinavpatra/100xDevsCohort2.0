import { useEffect, useState } from "react"

const useDebounce=(value,delay)=>{

    const[debouncedValue,setDebouncedValue]=useState(value);

    useEffect(()=>{


    },[value,delay])
    return
}

export default useDebounce;