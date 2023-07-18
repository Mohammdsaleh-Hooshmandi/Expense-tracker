import { useState } from "react";
import ReactDOM from "react-dom";

import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
import ErrorModal from "../UI/ErrorModal";

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
        props.onAddExpense({
            id: Math.random().toString(), // it is not good way for create id but now ok.
            title: newExpense.eneteredTitle,
            amount: newExpense.eneteredAmount,
            date: new Date(newExpense.eneteredDate)
        });
    }
    function cancleErrorModal() {
        setError(false);
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
            {
            error && ReactDOM.createPortal(
                <ErrorModal
                    onCancle={cancleErrorModal}
                    title={error.title}
                    message={error.message}
                />,
                document.getElementById("modal-root"))
            }
        </div>
    );
}

export default NewExpense;