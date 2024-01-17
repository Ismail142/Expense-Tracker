import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
   let values = props.dataPoints.map((data) => data.value);
   let maxValue = Math.max(...values);
   return (
      <div className="chart">
         {props.dataPoints.map((dataPoints) => (
            <ChartBar
               key={dataPoints.label}
               value={dataPoints.value}
               maxValue={maxValue}
               label={dataPoints.label}
            />
         ))}
      </div>
   );
}

export default Chart;
