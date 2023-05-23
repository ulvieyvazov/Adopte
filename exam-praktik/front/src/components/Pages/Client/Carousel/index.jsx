import { Swiper, SwiperSlide } from "swiper/react";

export default () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/blogger/img/i1.jpg.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/blogger/img/i1.jpg.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/blogger/img/i1.jpg.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/blogger/img/i1.jpg.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
