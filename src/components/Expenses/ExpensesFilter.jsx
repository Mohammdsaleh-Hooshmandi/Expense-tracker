import classes from "./ExpensesFilter.module.css";

function ExpenseFilter (props) {

    function dropDownChangeHandler (event) {
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className={classes.expensesFilter}>
            <div className={classes.expensesFilter__control}>
                <label htmlFor="dropdown">Filter by year</label>

                <select id="dropdown" value={props.selectedYear} onChange={dropDownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;