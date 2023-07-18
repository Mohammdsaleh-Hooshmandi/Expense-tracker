import { useState } from "react";

import classes from "./ExpenseForm.module.css";

function ExpenseForm(props) {
    const [userInput, setUserInput] = useState(
        {
            eneteredTitle: "",
            eneteredAmount: "",
            eneteredDate: ""
        }
    );

    function formSubmitHandler(event) {
        event.preventDefault();
    }
    function titleChangeHandler(event) {
        setUserInput(preState => { return { ...preState, eneteredTitle: event.target.value } });
    }
    function amountChangeHandler(event) {
        setUserInput(preState => { return { ...preState, eneteredAmount: event.target.value } });
    }
    function dateChangeHandler(event) {
        setUserInput(preState => { return { ...preState, eneteredDate: event.target.value } });
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={classes.newExpense__controls}>
                <div className={classes.newExpense__control}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={userInput.eneteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>

                <div className={classes.newExpense__control}>
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        value={userInput.eneteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className={classes.newExpense__control}>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        value={userInput.eneteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>

            <div className={classes.newExpense__actions}>
                <button type="button" onClick={props.onCancle}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;