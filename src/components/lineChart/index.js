import {Line} from "react-chartjs-2";
import {COLORS, LABELS, pairings} from "../../helper/constants";
import "./index.css";


const LineChart = ({data, options}) => {
    return (
        <div className={"line-chart"}>
            <Line
                data={{
                    labels: data.map((item) => item.id),
                    datasets: LABELS.map(item => ({
                        tension: 0.4,
                        borderColor: COLORS,
                        label: item,
                        data: data.map((d) => d[pairings[item]]),
                    })),
                }}
                options={{
                    ...options
                }}
                type={"line"}/>
        </div>


    );
};

export default LineChart;
