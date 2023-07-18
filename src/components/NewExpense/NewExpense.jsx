import { useState } from "react";

import classes from "./NewExpense.module.css";

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
        </div>
    );
}

export default NewExpense;