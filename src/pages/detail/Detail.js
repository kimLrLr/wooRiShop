import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ConWrap = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PWrap = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
`;
const PImg = styled.div`
  background-color: gray;
  height: 100%;
  margin-right: 80px;
  background: url(${(props) => props.$imgUrl}) no-repeat center / cover;
  max-width: 500px;
`;
const PTextWrap = styled.div`
  width: 100%;
`;
const PName = styled.div``;
const PDesc = styled.div``;
const PPrice = styled.div``;
const PButton = styled.button``;
const BtnWrap = styled.div``;
const BasketBtn = styled.button``;
const BuyBtn = styled.button``;

const params = {
  modules: [Autoplay, Navigation],
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  navigation: true,
};

export const Detail = () => {
  const productData = useLocation();
  const detailData = productData.state.pData;

  console.log(productData.state.pData);
  // => 데이터 확인용

  return (
    <>
      <ConWrap>
        <PWrap>
          <Swiper {...params}>
            {detailData.pImg.map((data, idx) => (
              <SwiperSlide key={idx}>
                <PImg $imgUrl={data.imgUrl}></PImg>
              </SwiperSlide>
            ))}
          </Swiper>
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
