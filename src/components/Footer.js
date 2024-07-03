import styled from "styled-components";
import { routes } from "../routes";
import { Link } from "react-router-dom";

const SFooter = styled.div`
  width: 100%;
  padding: 20px 5%;
  background-color: #dbdbdb;
  display: flex;
  align-items: center;
`;
const FLogo = styled.div`
  width: 200px;
  font-size: 36px;
  font-weight: 700;
  a {
    color: #808080;
  }
`;
const Copyright = styled.div`
  width: calc(100% - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 20px;
  }
`;

export const Footer = () => {
  return (
    <SFooter>
      <FLogo>
        <Link to={routes.main}>wooRI</Link>
      </FLogo>
      <Copyright>
        <p>Copyright 2024. kimLrLr, onyyyyy all rights reserved.</p>
      </Copyright>
    </SFooter>
  );
};
