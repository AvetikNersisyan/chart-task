const Table = () => {
    return (
        <div>
            <table>
                <tr>
                    <th colSpan={3}> Top Affiliate</th>
                    {/*<th>Age</th>*/}
                    {/*<th>Gender</th>*/}
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                </tr>


                {/*{data.map((val, key) => {*/}
                {/*    return (*/}
                {/*        <tr key={key}>*/}
                {/*            <td>{val.name}</td>*/}
                {/*            <td>{val.age}</td>*/}
                {/*            <td>{val.gender}</td>*/}
                {/*        </tr>*/}
                {/*    );*/}
                {/*})}*/}
            </table>
        </div>
    );
};

export default Table;