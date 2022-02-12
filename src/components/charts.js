import LineChart from "./lineChart";
import {mapOptions, options, PIE_DATA, lineData} from "../helper/constants";
import PieChart from "./pieChart";
import "./index.css";
import GeoChart from "./geoChart/geoChart";

const Charts = () => {
    return (

        <div className={"charts"}>
            <LineChart data={lineData} options={options}/>
            <PieChart data={PIE_DATA} options={options}/>
            <GeoChart options={mapOptions}/>
        </div>
    );
};

export default Charts;