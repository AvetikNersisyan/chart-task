import {useSelector} from "react-redux";

import "./index.css";
import tickURL from "../../img/accept.png";
import profitURL from "../../img/financial-profit.png";
import commissionURL from "../../img/save-money.png";
import pendingURL from "../../img/question-mark.png";


const SummaryData = () => {
    const {signUps, profit, commission, pendingCom} = useSelector(({PartnerDataDuck}) => PartnerDataDuck.summaryData);

    return (
        <section className={"summary"}>
            <span className={"summary-item signups"}>
                <h1> {signUps}</h1>
                <div>
                    <img src={tickURL}/>
                   <h3>Signups</h3>
                </div>

            </span>
            <span className={"summary-item profit"}>
                <h1> $ {profit}</h1>
                    <div>
                    <img src={profitURL}/>
                   <h3>Profit</h3>
                </div>
            </span>
            <span className={"summary-item commission"}>
                  <h1> {commission}</h1>
                    <div>
                    <img src={commissionURL}/>
                   <h3>Commissions</h3>
                </div>
            </span>
            <span className={"summary-item pending-commission"}>
                  <h1> {pendingCom}</h1>
                    <div>
                    <img src={pendingURL}/>
                   <h3>Pending Commissions</h3>
                </div>
            </span>
        </section>
    );
};


export default SummaryData;