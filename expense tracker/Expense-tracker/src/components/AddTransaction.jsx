import React, { useContext, useState } from "react";
import "../styles/addTrans.css";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [animate, setAnimate] = useState(false);
  const handleClick = (e) => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 600);
  };

  const handleSubmit = e =>{
    e.preventDefault();

    const newTransaction ={
      id :Math.floor(Math.random()*1000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="text"
          />
          <span>Message</span>
        </div>
        <label htmlFor="amount">(negative - expense, positive - income)</label>
        <div className="form-control">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="amount"
          />
          <span>Amount</span>
        </div>
        <button type="submit"
          className={`button ${animate ? "animate" : ""}`}
          onClick={handleClick}
        >
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
