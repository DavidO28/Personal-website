import "./myportfolio.scss";
import AmindiPic from "../../assets/amindiSLIDER.png";
import TodolistPic from "../../assets/todolisti.png";
import QuizPic from "../../assets/quiz.png";
import MySwiper from "../MySwiper/MySwiper";

export default function MyPortfolio() {


    return (

        <div className="myportfolio" id="Myportfolio">
            <h2>My portfolio</h2>
            <h3>Here you can see all the projects I have made, apart from small exercises</h3>
            {/* <div className="portfolioSlider">
                <a className="amindi" href="https://davido28.github.io/weather-app/" target="_blank" >
                    <img src={AmindiPic} alt="amindi" />
                </a>
                <a className="todolisti" href="https://davido28.github.io/to-do-list/" target="_blank" >
                    <img src={TodolistPic} alt="todolist" />
                </a>
                <a className="quizi" href="https://davido28.github.io/millionaire-quiz/" target="_blank" >
                    <img src={QuizPic} alt="quiz" />
                </a>
            </div> */}
            <div className="mySlides">
            <MySwiper />
            </div>
        </div>

    );
};