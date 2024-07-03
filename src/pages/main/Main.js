import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { productData } from "../../data/productData";
import { Link } from "react-router-dom";
import { EffectCoverflow, Pagination } from "swiper/modules";

const BannerWrap = styled.div`
  width: 100%;
  padding: 5% 0;
`;

const MainBnner = styled.div`
  width: 100%;
  height: 500px;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;

const params = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },

  modules: [EffectCoverflow, Pagination],
};

const PName = styled.h4`
  font-size: 26px;
  margin: 20px 0 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PPrice = styled.h5`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PDecs = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #808080;
  display: flex;
  justify-content: center;
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
                <PName>{data.pName}</PName>
                <PDecs>{data.pDesc}</PDecs>
                <PPrice>{data.pPrice}</PPrice>
              </Link>
            </SwiperSlide>
          ))
          .slice(0, 7)}
      </Swiper>
    </BannerWrap>
  );
};
