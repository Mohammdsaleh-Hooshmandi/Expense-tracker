import classes from "./ExpenseseList.module.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseseList(props) {

    if (props.items.length === 0)
        return <h2 className={classes.expensesList__fallback}>Found no expenses.</h2>;

    return (
        <ul className={classes.expensesList}>
            {
                props.items.map(item => <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />)
            }
        </ul>
    );
}

export default ExpenseseList;