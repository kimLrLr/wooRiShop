import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { ButtonUi, Form, Input, Title, Wrap } from "../../style/formStyles";
import { firebaseAuth, createUserWithEmailAndPassword } from "../../firebase";

export const Join = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <>
      <Wrap>
        <Form onSubmit={handleSubmit}>
          <Title>SIGN UP</Title>
          <Input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonUi type="submit" text={"회원가입"} />
        </Form>
      </Wrap>
    </>
  );
};
