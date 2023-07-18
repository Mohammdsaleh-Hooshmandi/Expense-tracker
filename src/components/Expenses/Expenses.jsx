import classes from "./Expenses.module.css";
import ExpenseItem from "./ExpenseItem";

function Expenses (props) {
    return (
        <div className={classes.expenses}>
            <ul>
                <ExpenseItem title="" amount="12" date="" />
            </ul>
        </div>
    );
}

export default Expenses;