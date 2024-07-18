import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const GridWrap = styled.div`
  padding: 5% 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  width: 350px;
  height: 350px;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;
const PName = styled.div`
  margin: 20px 0 10px 0;
  font-size: 20px;
  text-align: center;
`;
const PPrice = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const Product = () => {
  const menuData = useLocation();

  const pListData = menuData.state.product;

  return (
    <>
      <GridWrap>
        {pListData.map((data) => (
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
