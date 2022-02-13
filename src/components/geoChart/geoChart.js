import {memo, useEffect, useState} from "react";
import * as ChartGeo from "chartjs-chart-geo";
import {Chart} from "react-chartjs-2";

import "./index.css";

const GeoChart = ({options}) => {

    const [world, setWorld] = useState([]);

    useEffect(() => {
        fetch("https://unpkg.com/world-atlas@2.0.2/countries-50m.json")
            .then(res => res.json())
            .then(res => {
                let countries = ChartGeo.topojson.feature(res, res.objects.countries).features;
                const filtered = countries.filter(country => {
                    country.value = 100;
                    if (country.id === "840") {  // set revenue from USA 1000, in order to emphasize it.
                        country.value = 1000;
                    }
                    return country.id !== "010";  // I think we don't need Antarctica. :)

                });
                setWorld(filtered);
            });
    }, []);


    return (
        <div className={"geo-chart"}>
            <Chart type={"choropleth"} data={{

                labels: world.map((d) => d.properties.name),
                datasets: [{
                    label: 'Countries',
                    data: world.map((d) => ({feature: d, value: d.value})),
                }]

            }} options={{
                ...options,

            }}/>
        </div>
    );
};

export default memo(GeoChart);