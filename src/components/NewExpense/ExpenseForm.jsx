import { useReducer, useEffect, useState } from "react";

import classes from "./ExpenseForm.module.css";

function reducer(state, action) {
    switch (action.type) {
        case "TITLE":
            return { ...state, eneteredTitle: action.newInput };

        case "AMOUNT":
            return { ...state, eneteredAmount: action.newInput };

        case "DATE":
            return { ...state, eneteredDate: action.newInput };

        case "CLEAN":
            return {
                eneteredTitle: "",
                eneteredAmount: "",
                eneteredDate: ""
            };
    }
}

function ExpenseForm(props) {
    const initialState = {
        eneteredTitle: "",
        eneteredAmount: "",
        eneteredDate: ""
    };
    const [userInputsState, dispatchUserInputs] = useReducer(reducer, initialState);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        console.log("run")
        if (userInputsState.eneteredTitle.trim().length === 0 || userInputsState.eneteredAmount.trim().length === 0 || userInputsState.eneteredDate.trim().length === 0) {
            setIsValid(false);
            return;
        }
        setIsValid(true);
    }, [userInputsState]);

    function formSubmitHandler(event) {
        event.preventDefault();

        if (isValid) {
            props.onSaveExpenseData(userInputsState);
            dispatchUserInputs({ type: "CLEAN" });
            return;
        }

        props.onError({ title: "Empty input", message: "Please Enter valid value(non-empty value)." });
    }
    function titleChangeHandler(event) {
        dispatchUserInputs({ type: "TITLE", newInput: event.target.value });
    }
    function amountChangeHandler(event) {
        dispatchUserInputs({ type: "AMOUNT", newInput: event.target.value });
    }
    function dateChangeHandler(event) {
        dispatchUserInputs({ type: "DATE", newInput: event.target.value });
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={classes.newExpense__controls}>
                <div className={classes.newExpense__control}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={userInputsState.eneteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>

                <div className={classes.newExpense__control}>
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        value={userInputsState.eneteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className={classes.newExpense__control}>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        value={userInputsState.eneteredDate}
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