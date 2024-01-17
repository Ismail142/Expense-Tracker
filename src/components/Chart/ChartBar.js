import "./ChartBar.css";

function ChartBar(prop) {
   let barHeight = "0%";
   if (prop.maxValue > 0) {
      barHeight = Math.round((prop.value / prop.maxValue) * 100) + "%";
   }

   return (
      <div className="chart-bar">
         <div className="chart-bar__inner">
            <div
               className="chart-bar__fill"
               style={{ height: barHeight }}
            ></div>
         </div>
         <div className="chart-bar__label">{prop.label}</div>
      </div>
   );
}

export default ChartBar;
