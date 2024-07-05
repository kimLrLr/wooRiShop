import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  height: 600px;
  padding: 70px 20px;
  border-radius: 10px;
`;

export const Title = styled.h3`
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 0 10px;
  margin-top: 5px;
`;

export const Separ = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: block;
    width: 42%;
    height: 1px;
    background-color: #dbdbdb;
  }
  b {
    font-weight: 600;
    color: #555;
  }
`;

export const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: #8e8ffa;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  /* opacity: ${(props) => (props.$isActive ? 1 : 0.5)}; */
  /* cursor: ${(props) => (props.$isActive ? "pointer" : "default")}; */
`;

export const ButtonUi = ({ text }) => {
  return <Button>{text}</Button>;
};

const SErrorMessage = styled.span`
  font-size: 14px;
  color: crimson;
  font-weight: 600;
  margin-top: 8px;
`;

export const ErrorMessage = ({ text }) => {
  return <SErrorMessage>{text}</SErrorMessage>;
};

export const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
  a {
    font-weight: 700;
    margin-left: 8px;
    color: #555;
  }
`;

export const UnderInfo = ({ userAccountCheck, linkText, accountText }) => {
  return (
    <BottomInfo>
      {userAccountCheck} <Link to={routes.login}>{accountText} &rarr;</Link>
    </BottomInfo>
  );
};
