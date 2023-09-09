import CodeGif from "../../assets/8bitGif.gif";

export default function About() {

    return (
        <div className="About" id="About">
            <h2>About me</h2>
            <div className="information">
                  <div className="left">
                <p>As you already know my specialization is front-end web development, however I'm not limiting my interests to only this technology. I'm curious, willing to try and learn new things. </p>
               <img className="gif" src={CodeGif} alt="Gif" /> 
            </div>
            <div className="right">
                <p>Throughout one year journey I'am familliar and able to use following technologies on different levels:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS(SASS)</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Noje.js</li>
                    <li>React</li>
                    <li>Github</li>
                </ul>
            </div> 
            </div>
         
        </div>

    );
};