import React, { useContext, useState } from "react";
import { CountContext } from "./Context";

function App5() {
    const [count, setCount] = useState(0);
 
    return ( 
        <div>
            <CountContext.Provider value={count}>
                <CountRenderer />
                <Count setCount={setCount} />
            </CountContext.Provider>
        </div>
    );
}

function Count({ setCount }) {
    return (
        <div>
            
            <Buttons setCount={setCount} />
        </div>
    );
}

function CountRenderer() {
    const count = useContext(CountContext);
    return <div>{count}</div>;
}

function Buttons({ setCount }) {
    const count = useContext(CountContext);

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increase
            </button>

            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Decrease
            </button>
        </div>
    );
}

export default App5;
