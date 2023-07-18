import { useState } from "react";

import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense (props) {
    const [isAddExpense, setIsAddExpense] = useState(false);

    function addExpenseHandler () {
        setIsAddExpense(true);
    }
    function cancleAddExpenseHandler () {
        setIsAddExpense(false);
    }

    return (
        <div className={classes.newExpense}>
            {!isAddExpense && <button onClick={addExpenseHandler}>Add New Expense</button>}
            {isAddExpense && <ExpenseForm onCancle={cancleAddExpenseHandler} />}
        </div>
    );
}

export default NewExpense;