import { useEffect, useState } from 'react';

export default function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect( ()=>{
    
        setTimeout(() => {
          console.log("this is a rerender");
      setBankData({
        income: 100
      });
    }, 3000);
  }
  ,[])
  
 useEffect(()=>

  {setTimeout(() => {
    setExchangeData({
      returns: 100
    });
  }, 1000);
},[])


  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
      Hi there, your income tax returns are {incomeTax}
    </div>
  );
}