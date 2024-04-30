import './App.css'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import History from './components/History'
import AddTransaction from './components/AddTransaction'
import { useContext } from 'react';
import { GlobalProvider } from './context/GlobalState';
function App() {

  return (
    <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
      <IncomeExpense />
      <History />
      <AddTransaction />
    </div>
    </GlobalProvider>
  )
}

export default App
