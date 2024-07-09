import { useNavigate } from "react-router-dom";
import {
  firebaseAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../../firebase";
import {
  ButtonUi,
  ErrorMessage,
  Form,
  Input,
  Separ,
  Title,
  UnderInfo,
  Wrap,
} from "../../style/formStyles";
import { useState } from "react";
import { signOut } from "firebase/auth";

export const Join = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("　");
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );

      console.log(createdUser);

      navigate("/login");

      signOut(firebaseAuth);

      await updateProfile(firebaseAuth.currentUser, {
        displayName: userNickname,
      });

      setRegisterEmail("");
      setRegisterPassword("");
    } catch (err) {
      //console.log(err.code);
      switch (err.code) {
        case "auth/weak-password":
          setErrorMsg("비밀번호는 6자리 이상이어야 합니다");
          break;
        case "auth/invalid-email":
          setErrorMsg("잘못된 이메일 주소입니다");
          break;
        case "auth/email-already-in-use":
          setErrorMsg("이미 가입되어 있는 계정입니다");
          break;
      }
    }
  };

  return (
    <Wrap>
      <Form onSubmit={register}>
        <Title>SIGN UP</Title>

        <Input
          type="email"
          placeholder="이메일"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="패스워드"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />

        <Input
          type="text"
          placeholder="닉네임"
          onChange={(e) => setUserNickname(e.target.value)}
        />

        <ErrorMessage text={errorMsg} />

        <ButtonUi type="submit" text={"회원가입"} />

        <Separ>
          <span></span>
          <b>또는</b>
          <span></span>
        </Separ>

        <UnderInfo
          userAccountCheck={"아이디가 있으신가요?"}
          accountText={"로그인"}
        />
      </Form>
    </Wrap>
  );
};
