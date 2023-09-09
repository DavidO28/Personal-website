import AnimatedText from "../AnimatedText/AnimatedText";
import "../AnimatedText/animatedText.scss";
import MainBackground from "../../assets/HomeBackground.jpg";


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
                <h1>
                    <AnimatedText text={mytext}
                        delay={150} infinite />
                </h1>
            </div>
        </div>
    );
};