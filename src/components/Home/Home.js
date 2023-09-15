import AnimatedText from "../AnimatedText/AnimatedText";
import "../AnimatedText/animatedText.scss";
import MainBackground from "../../assets/head.gif";


export default function Home() {
    let mytext = "hello, I'm David, front-end web developer";

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
                            <div className="i-title-item2">Web Developer</div>
                        </div>
                    </div>
                </div>

                {/* <h1>
                    <AnimatedText text={mytext}
                        delay={150} infinite />
                </h1> */}

            </div>
        </div>
    );
};