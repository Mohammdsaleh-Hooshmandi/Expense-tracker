import { useState } from "react";

import classes from "./Expenses.module.css";
import ExpenseseList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2022");
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

    function filterChangeHandler (selectedYear) {
        setFilteredYear(selectedYear);
    }
    
    return (
        <div className={classes.expenses}>
            <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseseList items={filteredExpenses} />
        </div>
    );
}

export default Expenses;