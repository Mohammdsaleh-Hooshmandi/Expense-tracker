import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem (props) {

    return (
        <li>
            <div className={classes.expenseItem}>
                <ExpenseDate date={props.date} />
                <div className={classes.expenseItem__description}>
                    <h2>{props.title}</h2>

                    <div className={classes.expenseItem__price}>
                        ${props.amount}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ExpenseItem;