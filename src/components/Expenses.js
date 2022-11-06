import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFIlter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [FilteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const matched_year = props.expense.filter((file) => {
    return file.date.getFullYear().toString() === FilteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={FilteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpenseChart expenses={matched_year} />

        <ExpensesList items={matched_year} />
      </Card>
    </div>
  );
}

export default Expenses;
