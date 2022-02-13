import {useSelector} from "react-redux";

import "./index.css";

const Table = ({tableTitle}) => {

    const tableData = useSelector(({PartnerDataDuck}) => PartnerDataDuck.tableData);

    return (
        <>
            <table className={"partner-info"}>
                <tbody>
                <tr className={"table-title"}>
                    <th colSpan={4}>{tableTitle}</th>
                </tr>


                <tr>

                    <th> ID</th>
                    <th> UserName</th>
                    <th> Profit</th>
                    <th> Commision</th>
                </tr>


                {tableData.map(item => (
                    <tr key={item.id}>
                        <td> {item.id}</td>
                        <td> {item.userName}</td>
                        <td> {item.profit}</td>
                        <td> {item.commision}</td>
                    </tr>


                ))}


                {/*{data.map((val, key) => {*/}
                {/*    return (*/}
                {/*        <tr key={key}>*/}
                {/*            <td>{val.name}</td>*/}
                {/*            <td>{val.age}</td>*/}
                {/*            <td>{val.gender}</td>*/}
                {/*        </tr>*/}
                {/*    );*/}
                {/*})}*/}
                </tbody>
            </table>
        </>
    );
};

export default Table;