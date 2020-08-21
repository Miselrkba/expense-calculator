import React, { useState } from "react";
import uuid from "react-uuid";

import "./App.css";
import { Alert } from "./components/Alert";
import { ExponseForm } from "./components/ExponseForm";
import { ExpenseList } from "./components/ExpenseList";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car", amount: 400 },
  { id: uuid(), charge: "credit card", amount: 1200 },
];

function App() {
  // ****** state values ******
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // ****** functionality ******
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = {
        id: uuid(),
        charge,
        amount /* es6 same as charge: charge or amount: amount */,
      };
      setExpenses([...expenses, singleExpense]);
      setCharge("");
      setAmount("");
    } else {
      // handle alert called
    }
  };

  return (
    <>
      <Alert />
      <h1>expenses calculator</h1>
      <main className="App">
        <ExponseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending:{" "}
        <span className="total">
          ${" "}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
