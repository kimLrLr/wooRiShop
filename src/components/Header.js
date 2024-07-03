import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { useRef } from "react";

const Sheader = styled.div`
  width: 100%;
  padding: 20px 5%;
  /* background-color: #999; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuWrap = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 36px;
  margin-right: 50px;
  font-weight: 700;
  a {
    color: darkblue;
  }
`;
const Gnb = styled.ul`
  display: flex;
  li {
    margin-right: 50px;
    font-size: 18px;
    font-weight: 500;
  }

  li:hover {
    color: goldenrod;
  }
`;
const SideMenu = styled.ul`
  width: 200px;
  display: flex;
  font-size: 20px;
  text-align: center;
  justify-content: right;
  li {
    margin-right: 30px;
  }

  li:hover {
    font-weight: 600;
  }
`;

export const Header = () => {
  const headerRef = useRef();
  return (
    <Sheader ref={headerRef}>
      <MenuWrap>
        <Logo>
          <Link to={routes.main}>wooRI</Link>
        </Logo>
        <Gnb>
          <Link to={routes.product}>
            <li>추천상품</li>
          </Link>
          <Link to={routes.product}>
            <li>행사상품</li>
          </Link>
          <Link to={routes.product}>
            <li>강아지</li>
          </Link>
          <Link to={routes.product}>
            <li>고양이</li>
          </Link>
        </Gnb>
      </MenuWrap>
      <SideMenu>
        <Link to={routes.login}>
          <li>로그인</li>
        </Link>
        <Link to={routes.join}>
          <li>회원가입</li>
        </Link>
      </SideMenu>
    </Sheader>
  );
};
