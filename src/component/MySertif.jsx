import React from "react";
import "../css/MySertif.css";
import { Swiper, SwiperSlide } from "swiper/react";
import sertif from "../assets/sertif.jpg";
import sertif1 from "../assets/sertif1.jpg";
import sertif2 from "../assets/sertif2.jpg";
import sertif3 from "../assets/sertif3.jpg";

import "swiper/css";
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';

const MySertif = () => {
  return (
    <div className="mysertif">
      <div className="mysertif-title">
        <h1>
          My <span>Sertif</span>
        </h1>
      </div>
      <div className="mysertif-image-container">
        <div className="mysertif-image">
          <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="mysertif-description">
              <div className="mysertif-text">
                <h1>Lorem ipsum dolor<br /> sit amet consectetur adipisicing<br />  elit. Distinctio illum<br />  vero eos dicta consequuntur deserunt.</h1>
              </div>
                <img src={sertif} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="mysertif-description">
              <div className="mysertif-text">
                <h1>Lorem ipsum dolor<br /> sit amet consectetur adipisicing<br />  elit. Distinctio illum<br />  vero eos dicta consequuntur deserunt.</h1>
              </div>
                <img src={sertif1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="mysertif-description">
              <div className="mysertif-text">
                <h1>Lorem ipsum dolor<br /> sit amet consectetur adipisicing<br />  elit. Distinctio illum<br />  vero eos dicta consequuntur deserunt.</h1>
              </div>
                <img src={sertif2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="mysertif-description">
              <div className="mysertif-text">
                <h1>Lorem ipsum dolor<br /> sit amet consectetur adipisicing<br />  elit. Distinctio illum<br />  vero eos dicta consequuntur deserunt.</h1>
              </div>
                <img src={sertif3} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MySertif;
