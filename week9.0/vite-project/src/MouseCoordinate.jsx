import { useEffect, useState } from "react";

function useMousePointer(){

    const [position,setPosition]=useState({x:0,y:0});

    const handleMouseMove=(e)=>{
        setPosition({x:e.clientX, y:e.clientY});

    }

    useEffect(()=>{
        window.addEventListener('mousemove',handleMouseMove);
        return ()=>{
            window.addEventListener('mousemove',handleMouseMove);
        }

    })
    return position;
}

export default function MouseCoordinate() {
    const mousePointer=useMousePointer();

    return<>
    <br/>
    your mouse is pointing at {mousePointer.x} {mousePointer.y}
    </>

}
