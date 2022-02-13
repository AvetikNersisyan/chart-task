import {useState} from "react";

import chartURL from "../../img/navbar/bar-chart.png";
import dashboardURL from "../../img/navbar/dashboard.png";
import clockURL from "../../img/navbar/clock.png";
import eyeURL from "../../img/navbar/eye.png";
import exchangeURL from "../../img/navbar/exchange.png";
import settingsURL from "../../img/navbar/gear.png";
import logoURL from "../../img/navbar/letter-b1.png";
import newsURL from "../../img/navbar/megaphone.png";
import userURL from "../../img/navbar/user.png";
import keyURL from "../../img/navbar/key.png";
import heartURL from "../../img/heart-liked.png";

import rightArrowURL from "../../img/navbar/next.png";
import leftArrowURL from "../../img/navbar/left.png";

import "./index.css";

const navbarImgURL = [logoURL, dashboardURL, keyURL, userURL, newsURL, chartURL, exchangeURL, settingsURL, clockURL, eyeURL, heartURL,];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const hoverHandler = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <nav className={"navigation"} onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
            <div className={"toggle-navbar"}>
                <img src={isOpen ? leftArrowURL : rightArrowURL}/>
            </div>

            {navbarImgURL.map((img, idx) => {

                return <div className={"nav-item"} key={idx}>
                    <img src={img}/>
                </div>;
            })}

        </nav>
    );
};

export default Navigation;