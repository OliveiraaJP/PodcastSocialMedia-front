import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService.js";
import logoPng from "../../assets/logo.png";

import { Container, Button, Input, Form } from "./styles.js";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  function createUser(event) {
    event.preventDefault();
    const response = authService.signup({
      username,
      email,
      password,
      confirmPassword,
      image,
    });
    response.then((data) => {
      if (data.status === 201) {
        console.log([data.status, data.statusText]);
        navigate("/login");
      } else {
        console.log([data.status, data.statusText]);
      }
    });
  }

  return (
    <>
      <Container>
        <img src={logoPng} alt="" />
        <Form onSubmit={createUser}>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Input>
          <Input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          ></Input>
          <Input
            type="text"
            placeholder="Profile image"
            onChange={(e) => setImage(e.target.value)}
            required
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
          <Input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          ></Input>
          <Button type="submit">
            <p>Cadastrar</p>
          </Button>
        </Form>
        <Link to="/login" style={{ textDecoration: 'none'}}>
          <h2>Já possui conta? Ir para página de login!</h2>
        </Link>
      </Container>
    </>
  );
}

export default Signup;
