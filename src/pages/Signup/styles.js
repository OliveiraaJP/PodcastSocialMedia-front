import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img{
    width: 150px;
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
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Input = styled.input`
  height: 58px;
  width: 326px;
  border-radius: 5px;
  padding-left: 10px;
  border-style: none;
  margin-bottom: 20px;

  ::placeholder{
      color: #000000;
    }
`;

export const Button = styled.button`
  width: 326px;
  height: 46px;
  background-color: #104242;
  border-radius: 5px;
  border-style: none;

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
`;