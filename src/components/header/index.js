import LanguageSwitcher from "./languageSwitcher";
import "./index.css";
import Account from "./account";

const Header = () => {
    return (
        <header className={"header"}>
            <div className={"language-switcher"}>
                <LanguageSwitcher/>
            </div>
            <Account user={"Max"}/>
        </header>
    );
};

export default Header;