import classes from "./Expenses.module.css";
import ExpenseseList from "./ExpensesList";

function Expenses(props) {
    return (
        <div className={classes.expenses}>
            <ExpenseseList items={props.items} />
        </div>
    );
}

export default Expenses;