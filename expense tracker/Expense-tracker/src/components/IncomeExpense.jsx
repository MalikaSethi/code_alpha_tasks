import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions.filter(
    (transaction) => transaction.amount > 0
  ).map((transaction) => transaction.amount);
  const totalIncome = income
    .reduce((acc, currValue) => (acc += currValue), 0)
    .toFixed(2);

    const expense =transactions.map(transaction=>transaction.amount).filter(amt=>amt<0);
    const totalExpense = expense.reduce((acc,currValue)=>(acc+=currValue),0).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(totalExpense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
