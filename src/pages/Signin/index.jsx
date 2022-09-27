import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";

import * as authService from "../../services/authService.js";

import { Button, Container, Form, Input } from "./styles";
import logoPng from "../../assets/logo.png";

const Signin = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginUser(event) {
    event.preventDefault();
    const response = authService.signin({ email, password });
    response.then((data) => {
      if (data.status === 201) {
        const {token, username, image} = data.data
        setUserData({ token, usrName: username, usrImage: image });
        navigate("/homepage");
      } else {
        console.log([data.status, data.statusText]);
      }
    });
  }

  return (
    <>
      <Container>
        <img src={logoPng} alt="" />
        <Form onSubmit={loginUser}>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
          <Button type="submit">
            <p>Entrar</p>
          </Button>
        </Form>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Não possui? Ir para página de cadastro!</h2>
        </Link>
      </Container>
    </>
  );
};

export default Signin;
