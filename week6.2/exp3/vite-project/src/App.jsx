import React, { useState, useCallback, memo } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const inputFunction = () => {
    console.log("hi there");
  };

  return (
    <div>
      <ButtonComponent inputFun={inputFunction} />
      <button onClick={() => {
        setCount(count + 1);
      }}>Click me {count}</button>
    </div>
  );
}

const ButtonComponent = () => {
  console.log("child render");

  return (
    <div>
      <button>Button clicked</button>
    </div>
  );
}

export default App;