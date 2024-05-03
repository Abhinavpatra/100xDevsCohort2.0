import { useMemo, useState } from 'react'


function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);


  let count = useMemo(
    function calculateSum() {
      const n1 = parseInt(inputValue, 10);
      console.log("blu blah");

      return (n1 * (n1 + 1) / 2);

    }, [inputValue]);

  return (
    <>
      <input
        onChange={(e) => { setInputValue(e.target.value) }}
        type='number'
        placeholder='To find sum of 1 to n'>

      </input>
      <br /><br /> <br />

      <button
        onClick={() => { setCounter(counter + 1) }}>
        Counter is {counter}
      </button>
      <p>Sum from 1 to {inputValue} is {count}</p>


    </>
  )
}

export default App
