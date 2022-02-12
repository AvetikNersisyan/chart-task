import LineChart from "./lineChart";
import {options, PIE_DATA, userData} from "../helper/constants";
import PieChart from "./pieChart";
import "./index.css";

const Charts = () => {
    return (

        <div className={"charts"}>
            <LineChart data={userData} options={options}/>
            <PieChart data={PIE_DATA} options={options}/>
        </div>
    );
};

export default Charts;