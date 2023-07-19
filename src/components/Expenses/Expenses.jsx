import { useState } from "react";

import classes from "./Expenses.module.css";
import ExpenseseList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter";
import Chart from "../Chart/Chart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2023");
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

    function filterChangeHandler (selectedYear) {
        setFilteredYear(selectedYear);
    }
    
    return (
        <div className={classes.expenses}>
            <Chart items={filteredExpenses} />
            <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseseList items={filteredExpenses} />
        </div>
    );
}

export default Expenses;