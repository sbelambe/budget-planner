import React from 'react';
import './App.css';
import './componenets/css_files/Header.css';
import './componenets/css_files/Balance.css';
import './componenets/css_files/IncomeExpenses.css';
import './componenets/css_files/TransactionList.css';

import Header from './componenets/Header';
import Balance from './componenets/Balance';
import IncomeExpenses from './componenets/IncomeExpenses';
import TransactionList from './componenets/TransactionList';
import AddTransaction from './componenets/AddTransaction';
import {GlobalProvider}  from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <div className="container">
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
