import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ConWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImgWrap = styled.div`
  width: 50%;
  /* width: 100%; */
`;

const PImg = styled.div`
  width: 100%;
  height: 700px;
  background: url(${(props) => props.$imgUrl}) no-repeat center / cover;
`;
const PTextWrap = styled.div`
  width: 30%;
`;
const PName = styled.div`
  font-size: 44px;
  font-weight: 600;
  color: #1a237e;
`;
const PDesc = styled.div`
  font-size: 24px;
  margin: 40px 0 100px 0;
`;
const PPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const PButton = styled.button`
  all: unset;
  margin: 20px 0 30px 0;
`;
const BtnWrap = styled.div`
  font-size: 20px;
`;
const BasketBtn = styled.button`
  all: unset;
  width: 150px;
  height: 50px;
  background-color: #d9d9d9;
  text-align: center;
  margin-right: 80px;
`;

const BuyBtn = styled.button`
  all: unset;
  width: 150px;
  height: 50px;
  background-color: #d9d9d9;
  text-align: center;
`;

const params = {
  modules: [Autoplay, Pagination],
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  pagination: true,
};

export const Detail = () => {
  const productData = useLocation();
  const detailData = productData.state.pData;

  // console.log(productData.state.pData);
  // => 데이터 확인용

  return (
    <>
      <ConWrap>
        <PWrap>
          <ImgWrap>
            <Swiper {...params}>
              {detailData.pImg.map((data, idx) => (
                <SwiperSlide key={idx}>
                  <PImg $imgUrl={data.imgUrl} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ImgWrap>
          <PTextWrap>
            <PName>{detailData.pName}</PName>
            <PDesc>{detailData.pDesc}</PDesc>
            <PPrice>{detailData.pPrice} 원</PPrice>
            <PButton>수량</PButton>
            <BtnWrap>
              <BasketBtn>장바구니</BasketBtn>
              <BuyBtn>구매하기</BuyBtn>
            </BtnWrap>
          </PTextWrap>
        </PWrap>
      </ConWrap>
    </>
  );
};
