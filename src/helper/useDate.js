const useDate = () => {
    const now = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    return `${date} ${month} ${year}`;
};

export default useDate;