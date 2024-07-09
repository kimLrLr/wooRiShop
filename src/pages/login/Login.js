import { useNavigate } from "react-router-dom";
import { firebaseAuth, signInWithEmailAndPassword } from "../../firebase";
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

export const Login = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const loginUser = await signInWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );

      console.log(loginUser);
      navigate("/");

      setRegisterEmail("");
      setRegisterPassword("");
    } catch (err) {
      //console.log(err.code);
      setErrorMsg("아이디 및 비밀번호를 정확하게 입력해주세요.");
      switch (err.code) {
        case "auth/weak-password":
          setErrorMsg("비밀번호는 6자리 이상이어야 합니다");
          break;
        case "auth/invalid-email":
          setErrorMsg("잘못된 이메일 주소입니다");
          break;
      }
    }
  };

  return (
    <Wrap>
      <Form onSubmit={register}>
        <Title>Log In</Title>

        <Input
          type="text"
          placeholder="이메일"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="패스워드"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />

        <ErrorMessage text={errorMsg} />

        <ButtonUi type="submit" text={"로그인"} />

        <Separ>
          <span></span>
          <b>또는</b>
          <span></span>
        </Separ>

        <UnderInfo
          userAccountCheck={"아이디가 없으신가요?"}
          accountText={"회원가입"}
        />
      </Form>
    </Wrap>
  );
};
