import LanguageSwitcher from "./languageSwitcher";

import "./index.css";
import {NavLink} from "react-router-dom";
import Account from "./account";

const Header = () => {
    return (

        <header className={"header"}>
            <NavLink to={"/"}> BigWin365 affiliate</NavLink>
     
            <div className={"language-switcher"}>
                <LanguageSwitcher/>

            </div>
            <Account user={"Max"}/>
        </header>
    );
};

export default Header;