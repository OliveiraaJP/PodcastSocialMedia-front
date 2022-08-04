import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import articunoPng from "../../assets/articuno.png"

import { Container, Button, Input, Form } from "./styles.js";

function Signup() {
  const navigate = useNavigate();

  const [usename, setUsename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  function createUser(event) {
    event.preventDefault();
    console.log([email, usename]);
  }

  return (
    <>
      <Container>
        <img src={articunoPng} alt="" srcset="" />
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
            onChange={(e) => setUsename(e.target.value)}
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
      </Container>
    </>
  );
}

export default Signup;
