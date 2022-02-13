import {Doughnut} from "react-chartjs-2";
import {COLORS, options, PIE_LABELS} from "../../helper/constants";

import "./index.css";
import {memo} from "react";

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
                plugins: {
                    legend: {
                        position: "bottom",
                        align: "end",
                        labels: {
                            borderWidth: 0,
                            usePointStyle: true,
                            pointStyle: "circle"
                        }
                    }
                }

            }}/>
        </div>


    );
};


export default memo(PieChart);