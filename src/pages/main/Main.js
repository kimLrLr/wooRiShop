import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { productData } from "../../data/productData";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { B_IMG_URL, IMG_URL } from "../../constants";

const BannerWrap = styled.div`
  width: 100%;
  padding: 5% 2%;
`;

const MainBnner = styled.div`
  width: 100%;
  height: 400px;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;

const main_params = {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: true,
  modules: [Pagination, Navigation],
};

const sub_params = {
  slidesPerView: 1,
  speed: 3000,
  allowTouchMove: false,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  modules: [Autoplay],
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

const SubBannerWrap = styled.div`
  width: 100%;
  height: 400px;
`;
const SubBanner = styled.div`
  height: 100%;
`;

const ProductWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductA = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: #999; */
  padding: 20px 0;
  display: flex;
  margin: 100px 0;
  justify-content: space-between;
`;
const ProductB = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: #808080; */
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;
const ProductAImg = styled.div`
  width: 40%;
  height: 100%;
  background: url(${(props) => props.$imgUrl}) no-repeat center / cover;
`;
const ProductBImg = styled.div`
  width: 40%;
  height: 100%;
  background: url(${(props) => props.$imgUrl}) no-repeat center / cover;
`;
const ProductAEx = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;
const ProductBEx = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;
const PAname = styled.div`
  font-size: 60px;
  font-weight: 600;
`;
const PAdecs = styled.div`
  font-size: 30px;
  margin: 40px 0;
`;
const PAprice = styled.div`
  font-size: 24px;
`;
const PBname = styled.div`
  font-size: 60px;
  font-weight: 600;
`;
const PBdecs = styled.div`
  font-size: 30px;
  margin: 40px 0;
`;
const PBprice = styled.div`
  font-size: 24px;
`;

export const Main = () => {
  return (
    <>
      <BannerWrap>
        <Swiper {...main_params}>
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

      <SubBannerWrap>
        <SubBanner>
          <Swiper {...sub_params}>
            <SwiperSlide>
              <img
                src={IMG_URL + B_IMG_URL + "/banner1.jpg"}
                alt="고양이 배너 이미지"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={IMG_URL + B_IMG_URL + "/banner2.jpg"}
                alt="강아지 배너 이미지"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={IMG_URL + B_IMG_URL + "/banner3.jpg"}
                alt="강아지와 고양이 배너 이미지"
              />
            </SwiperSlide>
          </Swiper>
        </SubBanner>
      </SubBannerWrap>

      <ProductWrap>
        <ProductA>
          <ProductAImg $imgUrl={productData[9].pImg[0].imgUrl} />
          <ProductAEx>
            <PAname>{productData[9].pName}</PAname>
            <PAdecs>{productData[9].pDesc}</PAdecs>
            <PAprice>{productData[9].pPrice} 원</PAprice>
          </ProductAEx>
        </ProductA>

        <ProductB>
          <ProductBEx>
            <PBname>{productData[8].pName}</PBname>
            <PBdecs>{productData[8].pDesc}</PBdecs>
            <PBprice>{productData[8].pPrice} 원</PBprice>
          </ProductBEx>
          <ProductBImg $imgUrl={productData[8].pImg[0].imgUrl} />
        </ProductB>

        {/* {productData
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
            .slice(0, 7)} */}
      </ProductWrap>
    </>
  );
};
