import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100px;
    margin-bottom: 20px;
  }
  span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }

  h2{
    margin-top: 15px;
    font-size: 15px;
    color: gray;

  }
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 58px;
  width: 100%;
  border-radius: 5px;
  padding-left: 10px;
  border-style: none;
  margin-bottom: 20px;
  box-shadow: 5px 5px #666600;

  ::placeholder {
    color: #000000;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 46px;
  background-color: #666600;
  border-radius: 5px;
  border-style: none;
  box-shadow: 5px 5px black;

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: black;
  }
`;
