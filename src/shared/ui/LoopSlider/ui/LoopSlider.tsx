import React from "react";
import { ILoopSlider } from "../types/type";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const LoopSlider = ({ text }: ILoopSlider) => {
  return (
    <div className="bg-white">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={50}
        slidesPerView={10}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
      >
        {[...Array(19).keys()].map(id => (
          <SwiperSlide key={id + 1}>{text}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LoopSlider;
