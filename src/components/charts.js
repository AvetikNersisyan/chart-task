import LineChart from "./lineChart";
import {options, PIE_DATA, userData} from "../helper/constants";
import PieChart from "./pieChart";
import "./index.css";
import GeoChart from "./geoChart/geoChart";

const Charts = () => {
    return (

        <div className={"charts"}>
            <LineChart data={userData} options={options}/>
            <PieChart data={PIE_DATA} options={options}/>
            <GeoChart/>
        </div>
    );
};

export default Charts;