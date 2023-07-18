import { useState } from "react";
import ReactDOM from "react-dom";

import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense (props) {
    const [isAddExpense, setIsAddExpense] = useState(false);
    const [error, setError] = useState(false);

    function addExpenseHandler () {
        setIsAddExpense(true);
    }
    function cancleAddExpenseHandler () {
        setIsAddExpense(false);
    } 
    function saveExpenseData (newExpense) {
        console.log(newExpense)
    }

    return (
        <div className={classes.newExpense}>
            {!isAddExpense && <button onClick={addExpenseHandler}>Add New Expense</button>}
            {
            isAddExpense && <ExpenseForm
                                onCancle={cancleAddExpenseHandler}
                                onSaveExpenseData={saveExpenseData}
                                onError={setError}
                            />
            }
        </div>
    );
}

export default NewExpense;