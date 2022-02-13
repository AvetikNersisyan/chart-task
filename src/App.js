import Charts from "./components/charts";
import Chart from 'chart.js/auto';
import Table from "./components/table";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {setLineData, setSummary, setTableData} from "./redux/ducks/partnerDataDuck";

import "./index.css";
import SummaryData from "./components/summaryData";
import Header from "./components/header";
import Divider from "./components/divider";
import Navigation from "./components/navigation";

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


            <Header/>
            <Divider/>
            <Navigation/>
            <div className={"main-content-wrapper"}>
                <SummaryData/>
                <Charts/>
                <section className={"partner-info-wrapper"}>
                    <Table tableTitle={"Top Affiliates"}/>
                    <Table tableTitle={"Signups"}/>
                    <Table tableTitle={"Pending Commissions"}/>
                </section>

                {/*<Routes>*/}
                {/*    <Route path={""} element={<Header/>}/>*/}
                {/*</Routes>*/}

            </div>


        </>

    );
}

export default App;
