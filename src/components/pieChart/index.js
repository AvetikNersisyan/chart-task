import {Doughnut} from "react-chartjs-2";
import {COLORS, LABELS, options, pairings, PIE_DATA, PIE_LABELS} from "../../helper/constants";

import "./index.css";

const PieChart = ({data}) => {


    return (
        <div className={"pie-chart"}>
            <Doughnut data={{
                labels: PIE_LABELS,
                datasets: [
                    {
                        label: "Total pie chart",
                        data: data,
                        backgroundColor: COLORS,
                    }
                ]
            }} options={{
                ...options,


            }}/>
        </div>


    );
};


export default PieChart;