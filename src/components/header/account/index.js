import "./index.css";

import userImgUrl from "../../../img/man.png";
import useDate from "../../../helper/useDate";


const Account = ({user}) => {
    const fakeDate = useDate();
    return (
        <div className={"account-header"}>
            <img src={userImgUrl}/>
            <div className={"user-welcome"}>
                <h4> Hello {user}! </h4>
                <p>Last login: {fakeDate}</p>
            </div>
        </div>
    );
};

export default Account;