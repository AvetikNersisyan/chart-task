import Charts from "./components/charts";
import Chart from 'chart.js/auto';
import Table from "./components/table";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setLineData, setSummary, setTableData} from "./redux/ducks/partnerDataDuck";

import "./index.css";
import SummaryData from "./components/summaryData";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(res => {
                dispatch(setLineData(res.lineData));
                dispatch(setTableData(res.tableData));
                dispatch(setSummary(res.summaryData));
            });
    }, []);


    return (
        <>
            <SummaryData/>
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
