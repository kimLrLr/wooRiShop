import { useLocation } from "react-router-dom";
import styled from "styled-components";

const PWrap = styled.div``;
const PImg = styled.div``;
const PTextWrap = styled.div``;
const PName = styled.div``;
const PDesc = styled.div``;
const PPrice = styled.div``;
const PButton = styled.button``;
const BtnWrap = styled.div``;
const BasketBtn = styled.button``;
const BuyBtn = styled.button``;

export const Detail = () => {
  const productData = useLocation();
  // console.log(productData.state.pData);
  // => 데이터 확인용

  return (
    <>
      <PWrap>
        <PImg />
        <PTextWrap>
          <PName></PName>
          <PDesc></PDesc>
          <PPrice></PPrice>
          <PButton>수량</PButton>
          <BtnWrap>
            <BasketBtn>장바구니</BasketBtn>
            <BuyBtn>구매하기</BuyBtn>
          </BtnWrap>
        </PTextWrap>
      </PWrap>
    </>
  );
};
