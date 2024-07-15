import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { productData } from "../data/productData";
import { firebaseAuth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

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

  const [proRecs, setProRecs] = useState();
  const [proEvent, setProEvent] = useState();
  const [proDogData, setProDogData] = useState();
  const [proCatData, setProCatData] = useState();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = firebaseAuth.currentUser;

  const logoutHandler = async () => {
    try {
      await signOut(firebaseAuth);
      alert("로그아웃 되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        //추천상품
        const pRecs = productData.filter((v) => {
          if (v.pRecs === true) {
            return v;
          } else {
            return null;
          }
        });
        setProRecs(pRecs);

        //행사상품
        const pEvent = productData.filter((v) => {
          if (v.pEvent === true) {
            return v;
          } else {
            return null;
          }
        });
        setProEvent(pEvent);

        //강아지
        const pDog = productData.filter((v) => {
          if (v.pClass === "dog") {
            return v;
          } else {
            return null;
          }
        });
        setProDogData(pDog);

        //고양이
        const pCat = productData.filter((v) => {
          if (v.pClass === "cat") {
            return v;
          } else {
            return null;
          }
        });
        setProCatData(pCat);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  });

  return (
    <Sheader ref={headerRef}>
      <MenuWrap>
        <Logo>
          <Link to={routes.main}>wooRI</Link>
        </Logo>
        <Gnb>
          <Link to={routes.product} state={{ product: proRecs }}>
            <li>추천상품</li>
          </Link>
          <Link to={routes.product} state={{ product: proEvent }}>
            <li>행사상품</li>
          </Link>
          <Link to={routes.product} state={{ product: proDogData }}>
            <li>강아지</li>
          </Link>
          <Link to={routes.product} state={{ product: proCatData }}>
            <li>고양이</li>
          </Link>
        </Gnb>
      </MenuWrap>

      {!user && (
        <SideMenu>
          <Link to={routes.login}>
            <li>로그인</li>
          </Link>
          <Link to={routes.join}>
            <li>회원가입</li>
          </Link>
        </SideMenu>
      )}
      {user && (
        <SideMenu>
          <div>{user.displayName} 님</div>
          <li onClick={logoutHandler}>로그아웃</li>
        </SideMenu>
      )}
    </Sheader>
  );
};
