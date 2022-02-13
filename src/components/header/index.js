import LanguageSwitcher from "./languageSwitcher";
import "./index.css";

const Header = () => {
    return (
        <header className={"header"}>
            <div className={"language-switcher"}>
                <LanguageSwitcher/>
            </div>
        </header>
    );
};

export default Header;