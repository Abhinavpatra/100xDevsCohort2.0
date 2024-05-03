import { useCallback, useContext, useState } from 'react'
import { countAtom } from './store/atoms/count'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'


function App() {
  

  return (
    <>
      <div>
       <RecoilRoot>
          <Count ></Count>
       </RecoilRoot>
       

      </div>
    </>
  )
}

function Count() {
  return <>
    <CountRenderer />
    <Button  />
  </>
}


function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <>
    {count}
  </>
}


function Button() {
  const setCount = useSetRecoilState(countAtom);
  return <>
    <div>
      <button onClick={() => {
        setCount(count=>count + 1);
      }}>Increase</button>
      <button onClick={() => {
        setCount(count=>count - 1);
      }}>Decrease </button>
    </div></>

}


export default App;
