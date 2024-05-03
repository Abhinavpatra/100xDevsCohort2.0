import { useEffect, useMemo, useState } from 'react'

export default function AppMemo() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    }, 3000)
  }, [])

  const cryptoReturns = useMemo(() => { return exchange1Data.returns + exchange2Data.returns }, [exchange2Data, exchange1Data])

  const incomeTax = useMemo(() => { return (cryptoReturns + bankData.income) * 0.3 }, [bankData, cryptoReturns])

  return (
    <div>
      hi there, your income tax returns are {incomeTax}
    </div>
  )
}

