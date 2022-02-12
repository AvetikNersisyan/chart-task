export const lineData = [
    {
        id: 1,
        year: 2001,
        clicks: 11,
        pageViews: -20,
        signUps: 11,
    },
    {
        id: 2,
        year: 2001,
        clicks: -10,
        pageViews: 8,
        signUps: 13,


    },
    {
        id: 3,
        year: 2001,
        clicks: 2,
        pageViews: -5,
        signUps: 7
    },
    {
        id: 4,
        year: 2001,
        clicks: 10,
        pageViews: 30,
        signUps: 2
    },
    {
        id: 5,
        year: 2001,
        clicks: 21,
        pageViews: -16,
        signUps: 3
    },
    {
        id: 6,
        year: 2001,
        clicks: 1,
        pageViews: 17,
        signUps: 20
    },
    {
        id: 7,
        year: 2001,
        clicks: 8,
        pageViews: 40,
        signUps: -15
    },

];


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


export const PIE_DATA = lineData.reduce((data, item) => {
    data[0] += item.pageViews;
    data[1] += item.clicks;
    data[2] += item.signUps;
    return data;
}, [0, 0, 0]);

console.log(PIE_DATA);
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
    showOutline: true,
    showGraticule: false,

    plugins: {
        legend: {
            display: false
        },
    },
    geo: {
        colorScale: {
            display: true,
        },
    },
    scales: {
        xy: {
            // projection: 'equalEarth'
            projection: 'equalEarth'
        }
    }
};
export const worldRevenue = [
    100, 150, 220, 350, 450
];
