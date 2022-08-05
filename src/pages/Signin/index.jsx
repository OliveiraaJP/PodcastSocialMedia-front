import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form, Input } from './styles';
import * as authService from "../../services/authService.js"
import articunoPng from "../../assets/articuno.png"

const Signin = () => {
    const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("")


  function createUser(event) {
    event.preventDefault();
    const response = authService.signin({email, password})
    response.then(data => {
      if(data.status === 201){
        console.log([data.status ,data.statusText]);
        setToken(data.data)
        navigate('/homepage')
      } else {
         console.log([data.status , data.statusText]);
      }
    })
  }

  return (
    <>
      <Container>
      <img src={articunoPng} alt=""/>
        <Form onSubmit={createUser}>
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
      </Container>
    </>
  );
}

export default Signin