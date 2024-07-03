import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { productData } from "../../data/productData";
import { Link } from "react-router-dom";
import { EffectCoverflow, Pagination } from "swiper/modules";

const MainBnner = styled.div`
  width: 500px;
  height: 500px;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;

const params = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 4,
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  modules: [EffectCoverflow, Pagination],
};

const BannerWrap = styled.div`
  width: 100%;
  height: 80vh;
  padding-top: 5%;
`;
export const Main = () => {
  return (
    <BannerWrap>
      <Swiper {...params}>
        {productData
          .map((data) => (
            <SwiperSlide key={data.id}>
              <Link to={`/detail/`} state={{ pData: data }}>
                <MainBnner $bgUrl={data.pImg[0].imgUrl} />
              </Link>
            </SwiperSlide>
          ))
          .slice(0, 7)}
      </Swiper>
    </BannerWrap>
  );
};
