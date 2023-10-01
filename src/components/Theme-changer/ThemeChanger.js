import Sun from "../../assets/light.png";
import Moon from "../../assets/dark.png";
import "./ThemeChanger.scss";
import { useState } from "react";

const ThemeChanger = ({ setTheme }) => {

    const ToggleTheme = () => {
        setTheme((prevTheme) => ("light-theme" ? "dark-theme" : "light-theme"));
    };
    


    return (

        <div className="mytheme" onClick={ToggleTheme}>
            <img className="mysun" src={Sun} alt="light theme" />
            <img className="mymoon" src={Moon} alt="dark theme" />
        </div>

    );
}

export default ThemeChanger;