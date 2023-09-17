// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import "./MySwiper.scss";
import AmindiPic from "../../assets/amindiSLIDER.png";
import TodolistPic from "../../assets/todolisti.png";
import QuizPic from "../../assets/quiz.png";

const MySwiper = () => {

    return (
    
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
            >
                <SwiperSlide>
                    <a className="amindi" href="https://davido28.github.io/weather-app/" target="_blank" >
                        <img src={AmindiPic} alt="amindi" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className="todolisti" href="https://davido28.github.io/to-do-list/" target="_blank" >
                        <img src={TodolistPic} alt="todolist" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className="quizi" href="https://davido28.github.io/millionaire-quiz/" target="_blank" >
                        <img src={QuizPic} alt="quiz" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>MORE COMING SOON</SwiperSlide>

            </Swiper>


    );
};

export default MySwiper;