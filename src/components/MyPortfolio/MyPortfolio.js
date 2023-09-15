import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import AmindiPic from "../../assets/amindiSLIDER.png";

export default function MyPortfolio() {


    return (

        <div className="myportfolio" id="Myportfolio">
            <h2>My portfolio</h2>
            <h3>Here you can see all the projects I have made, apart from small exercises</h3>
            <div className="porfolioItems">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>

                        <a target="_blank" href="https://davido28.github.io/weather-app/">
                            <img className='sliderIMG' src={AmindiPic} alt="amindi" />
                            amindi
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a target="_blank" href="https://davido28.github.io/weather-app/">
                            <img className='sliderIMG' src={AmindiPic} alt="amindi" />
                            amindi2
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='lameri'>
                        <a target="_blank" href="https://davido28.github.io/weather-app/">
                            <img className='sliderIMG' src={AmindiPic} alt="amindi" />
                            amindi3
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    );
};