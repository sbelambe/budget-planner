import './css_files/Balance.css';
import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);

  return (
    <>
      <div className="title">Your Balance</div>
      <div className="total">{total}</div>
    </>
  )
}

export default Balance
