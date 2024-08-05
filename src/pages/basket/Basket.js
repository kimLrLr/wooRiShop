import styled from "styled-components";

export const Basket = (props) => {
  console.log(props.cart);

  const BasketWrap = styled.div`
    padding: 20px 2%;
  `;
  const BasketTitle = styled.div`
    font-size: 40px;
    font-weight: 700;
  `;

  return (
    <BasketWrap>
      <BasketTitle>
        <h2>장바구니</h2>
      </BasketTitle>
    </BasketWrap>
  );
};
