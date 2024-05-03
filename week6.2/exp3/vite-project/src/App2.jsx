import { memo, useCallback, useState } from "react";

function App2() {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("hi there");
  }, []);

  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />

      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  );
}

const ButtonComponent = memo(() => {
  console.log("App2 child render");
  return (
    <div>
      <button>Button clicked</button>
    </div>
  );
});

export default App2;
