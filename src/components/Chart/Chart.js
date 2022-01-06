import React from "react";
import CharBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(
        (dataPoint) => dataPoint.value
    );
    const maxValue = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return (
                    <CharBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={maxValue}
                        label={dataPoint.label}
                    />
                );
            })}
        </div>
    );
};

export default Chart;
