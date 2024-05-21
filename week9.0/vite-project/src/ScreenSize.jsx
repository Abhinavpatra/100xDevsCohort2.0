import { useEffect, useState } from "react";


const useScreenSize=()=>{
    
    const [dimension,setDimension]=useState({height:window.innerHeight,width:window.innerWidth});
    useEffect(()=>{
        const handleScreenSize=()=>{
            setDimension({height:window.innerHeight, width:window.innerWidth});
        }
        window.addEventListener('resize',handleScreenSize);
       
        
    },[])
    return dimension;
}

export default function ScreenSIze(){

    const {height,width}=useScreenSize();
    return<><br/>
    The Dimensions of the screen are heigh={height} , width={width}
    </>

}