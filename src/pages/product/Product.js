import styled from "styled-components";
import { productData } from "../../data/productData";
import { Link } from "react-router-dom";

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px; //가로컨텐츠간격
  row-gap: 50px; //세로컨텐츠간격
`;
const PWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PImg = styled.div`
  width: 250px;
  height: 250px;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;
const PName = styled.div`
  text-align: center;
`;
const PPrice = styled.div`
  text-align: center;
`;

export const Product = () => {
  return (
    <>
      <GridWrap>
        {productData.map((data) => (
          <PWrap key={data.id}>
            <Link to={`/detail`} state={{ pData: data }}>
              <PImg $bgUrl={data.pImg[0].imgUrl} />
              <PName>{data.pName}</PName>
              <PPrice>{data.pPrice}</PPrice>
            </Link>
          </PWrap>
        ))}
      </GridWrap>
    </>
  );
};
