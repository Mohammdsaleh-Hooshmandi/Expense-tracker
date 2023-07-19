import classes from "./Chart.module.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    const chartDataPoint = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for (const expense of props.items) 
        chartDataPoint[expense.date.getMonth()].value += expense.amount
    
    const dataPointValues = chartDataPoint.map(item => item.value);
    const maxValue = Math.max(...dataPointValues);

    return (
        <div className={classes.chart}>
            {
            chartDataPoint.map(dataPoint => <ChartBar
                                                key={dataPoint.label}
                                                label={dataPoint.label}
                                                value={dataPoint.value}
                                                maxValue={maxValue}
                                            />
                                            )
            }
        </div>
    );
}

export default Chart;