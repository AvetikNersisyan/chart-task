import LanguageSwitcher from "./languageSwitcher";
import "./index.css";
import Account from "./account";

const Header = () => {
    return (
        <header className={"header"}>
            <h1> BigWin365 affiliate</h1>
            <div className={"language-switcher"}>
                <LanguageSwitcher/>
            </div>
            <Account user={"Max"}/>
        </header>
    );
};

export default Header;