import classes from "./ChartBar.module.css";

function ChartBar(props) {

    return (
        <div className={classes.chartBar}>
            <div className={classes.chartBar__inner}>
                <div className={classes.chartBar__fill}></div>
            </div>

            <div className={classes.chartBar__label}>Apri</div>
        </div>
    );
}

export default ChartBar;