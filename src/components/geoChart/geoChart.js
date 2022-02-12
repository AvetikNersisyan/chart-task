import {useEffect, useState} from "react";
import * as ChartGeo from "chartjs-chart-geo";
import {Chart} from "react-chartjs-2";

const GeoChart = () => {

    const [world, setWorld] = useState([]);

    console.log(world);

    useEffect(() => {
        fetch("https://unpkg.com/world-atlas@2.0.2/countries-50m.json")
            .then(res => res.json())
            .then(res => {
                const countries = ChartGeo.topojson.feature(res, res.objects.countries).features;
                setWorld(countries);

            });


        // });
    }, []);


    return (
        <div>
            <Chart type={"choropleth"} data={{

                labels: world.map((d) => d.properties.name),
                datasets: [{
                    label: 'Countries',
                    data: world.map((d) => ({feature: d, value: Math.random()})),
                }]

            }} options={{
                showOutline: false,
                showGraticule: false,
                plugins: {
                    legend: {
                        display: false
                    },
                },
                scales: {
                    xy: {
                        projection: 'equalEarth'
                    }
                }
            }}/>
        </div>
    );
};

export default GeoChart;