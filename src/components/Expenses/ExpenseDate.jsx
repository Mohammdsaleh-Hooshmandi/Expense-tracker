import classes from "./ExpenseDate.module.css";

function ExpenseDate (props) {

    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className={classes.expenseDate}>
            <div className={classes.expenseDate__month}>{month}</div>
            <div className={classes.expenseDate__year}>{year}</div>
            <div className={classes.expenseDate__day}>{day}</div>
        </div>
    );
}

export default ExpenseDate;