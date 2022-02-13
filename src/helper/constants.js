export const COLORS = ["#FBCF71", "#01AAAA", "#1F7BB5"];


export const LABELS = [
    "Clicks",
    "Page Views",
    "Sign ups"
];

export const PIE_LABELS = [
    "Total views",
    "Total clicks",
    "Sign ups"
];


export const pairings = {
    "Clicks": "clicks",
    "Page Views": "pageViews",
    "Sign ups": "signUps"
};


export const options = {
    maintainAspectRatio: false,

    elements: {
        point: {
            radius: 4,
            hoverRadius: 5,
            spanGaps: true,
            borderJoinStyle: "bevel",
            // backgroundColor: Chart,
            padding: 5
        },
        line: {
            borderJoinStyle: "bevel",
        }
    },
    responsive: true,
    scales: {
        x: {
            display: false
        }
    },
    plugins: {
        legend: {
            display: true,
            position: "bottom",
            align: "end",
            labels: {
                boxWidth: 10,
                boxHeight: 10,
                color: "white",

            },

        }
    }
};


export const mapOptions = {
    maintainAspectRatio: false,
    showOutline: false,
    showGraticule: false,

    plugins: {
        legend: {
            display: false
        },

    },
    geo: {
        colorScale: {
            display: false,
        },
    },
    scales: {
        xy: {
            projection: 'equalEarth'
        }
    }
};



