// import { Link } from "react-router-dom";
import "./Navbar.scss";
import burgerIcon from "../../assets/burgermenu.png";
import burgerClose from "../../assets/closeburger.png";
import Sun from "../../assets/light.png";
import Moon from "../../assets/dark.png";
import Github from "../../assets/github.png";
import { useState } from "react";


export default function Navbar() {
    const [open, setOpen] = useState(false);


    return (
        <>
            <nav className="navbar" id="Navbar">

                {/* <Link className="nav-link david" to="/">David.</Link> */}
                {/* <a className="nav-link david" href="">David.</a> */}

                <div className="mySocialLinks">
                    <a target="_blank" href="https://github.com/DavidO28">
                        <img src={Github} alt="github" />
                    </a>

                </div>
                <div className="navbar-ul-section">
                    <ul className="nav-ul">
                        <li className="nav-li ">
                            {/* <Link className="nav-link homelink" to="/">Home</Link> */}
                            <a className="nav-link homelink" href="#Home">Home</a>
                        </li>
                        <li className="nav-li">
                            {/* <Link className="nav-link" to="/about">About</Link> */}
                            <a className="nav-link" href="#About" >About</a>
                        </li>
                        <li className="nav-li">
                            {/* <Link className="nav-link portfoliolink" to="/myportfolio">Portfolio</Link> */}
                            <a className="nav-link portfoliolink" href="#Myportfolio">Portfolio</a>
                        </li>
                    </ul>
                </div>


                <div className="mobile-menu">
                    <div className="burgermenu-icons">
                        <img className={open ? "burger-icon passive" : "burger-icon"} onClick={() => setOpen(!open)} src={burgerIcon} alt="Burger menu icon" />
                        <img className={open ? "burger-close active" : "burger-close"} onClick={() => setOpen(!open)} src={burgerClose} alt="close burger menu icon" />

                        <ul className={open ? "burger-ul active" : "burger-ul"}>
                            <li className="burger-li" onClick={() => setOpen(!open)}>
                                {/* <Link className="nav-link" to="/">Home</Link> */}
                                <a className="nav-link " href="#Home">Home</a>
                            </li>
                            <li className="burger-li" onClick={() => setOpen(!open)}>
                                {/* <Link className="nav-link" to="/about">About</Link> */}
                                <a className="nav-link" href="#About" >About</a>
                            </li>
                            <li className="burger-li" onClick={() => setOpen(!open)}>
                                {/* <Link className="nav-link" to="/myportfolio">Portfolio</Link> */}
                                <a className="nav-link " href="#Myportfolio">Portfolio</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* <div className="theme">
                    <img className="mysun" src={Sun} alt="light theme" />
                    <img className="mymoon" src={Moon} alt="dark theme" />
                </div> */}

            </nav>
        </>
    );
};