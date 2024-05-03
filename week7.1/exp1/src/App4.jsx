import { useState } from "react";


export default function App4() {
    const [count, setCount] = useState(0);

    return <>
        <div>

            <Count count={count} setCount={setCount}/>
        </div>


    </>
}


function Count({count,setCount}) {
    return <>
    {count}
    <Button count={count} setCount={setCount}/>

    </>

}

function Button({count,setCount}) {
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }

    return <>
    <button onClick={increment}>Increase</button>
    <button onClick={decrement}>Decrease</button>

    </>

}