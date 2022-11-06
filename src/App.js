import Expenses from "./components/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense";

function App(props) {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 92.13,
      date: new Date(2022, 7, 19),
    },
    {
      id: "e2",
      title: "Car Insurence",
      amount: 60.13,
      date: new Date(2021, 6, 29),
    },
    {
      id: "e3",
      title: "College fees",
      amount: 56.13,
      date: new Date(2020, 5, 11),
    },
    {
      id: "e4",
      title: "Table cost",
      amount: 82.13,
      date: new Date(2020, 4, 9),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} />
    </div>
  );
}

export default App;
