import "./index.css";
import {useEffect, useState} from "react";

import uk from "../../../img/flags/united-kingdom.png";
import ge from "../../../img/flags/germany.png";
import ru from "../../../img/flags/russia.png";
import {clear} from "@testing-library/user-event/dist/clear";


const LanguageSwitcher = () => {
    const [lang, setLang] = useState("0");
    const [isShowAll, setIsShowAll] = useState(false);
    const languageSelectHandler = (language) => {
        setLang(language);
        setIsShowAll(prev => !prev);
    };

    useEffect(() => {
        let timeoutID;
        if (isShowAll) {
            timeoutID = setTimeout(() => setIsShowAll(false), 1500);
        }

        return () => clearTimeout(timeoutID);
    });


    const languages = [
        <div key={1111} onClick={() => languageSelectHandler("0")} className={"lang-name"}>
            <img className={"english flag"} src={uk}/>
            <p> EN</p>
        </div>,
        <div key={2222} onClick={() => languageSelectHandler("1")} className={"lang-name"}>
            <img className={"german flag"} src={ge}/>
            <p> DE</p>
        </div>,
        <div key={3333} onClick={() => languageSelectHandler("2")} key={0} className={"lang-name"}>
            <img className={"russian flag"} src={ru}/>
            <p> RU </p>
        </div>,
    ];

    return (
        <div className={"flags"}>
            {isShowAll ? languages : languages[lang]}
        </div>
    );
};

export default LanguageSwitcher;