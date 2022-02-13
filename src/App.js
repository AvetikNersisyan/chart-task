import Charts from "./components/charts";
import Chart from 'chart.js/auto';
import Table from "./components/table";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setLineData, setTableData} from "./redux/ducks/partnerDataDuck";

import "./index.css";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(res => {
                dispatch(setLineData(res.lineData));
                dispatch(setTableData(res.tableData));
            });
    }, []);


    return (
        <>
            <Charts/>
            <div className={"partner-info-wrapper"}>
                <Table tableTitle={"Top Affiliates"}/>
                <Table tableTitle={"Signups"}/>
                <Table tableTitle={"Pending Commissions"}/>
            </div>

        </>

    );
}

export default App;
