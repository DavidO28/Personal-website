

import MainBackground from "../../assets/head.gif";


export default function Home() {

    return (
        <div className="Home" id="Home">
            <div className="left">
                <div className="imgContainer">
                    <img src={MainBackground} alt="background image" />
                </div>
            </div>

            <div className="right">
                <div className="headline">
                    <h1>hello I'm </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">David</div>
                            <div className="i-title-item">Web Developer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};