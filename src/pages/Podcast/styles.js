import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: all 200ms ease-in-out 0s;

  header {
    position: sticky;
    top: 0;
    left: 0;
    height: 12vh;
    display: flex;
    width: 100%;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
    background-color: #202020;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      margin-left: 10px;
      border-radius: 100%;
      width: 53px;
      object-fit: contain;
    }
  }

  main {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      -webkit-box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.75);
    }

    h1 {
      font-weight: 700;
      text-align: center;
    }
    h3 {
      text-align: center;
      font-size: 0.9em;
      color: #010101;
      margin-bottom: 13px;
    }
    p {
      padding: 10px 7%;
      margin-bottom: 30px;
    }
  }
`;

export const CommentsContainer = styled.div`
  .send{
    background-color: #666600;
    font-weight: 800;
    width: 12%;
    margin-left: 5%;
    margin-bottom: 50px;
  }

  h1 {
    padding: 0 5%;
    border-bottom: 2px solid black;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 12%;
      background-color: #666600;
      font-weight: 800;
    }
  }
  form {
    textarea {
      display: block;
      margin: auto;
      width: 90%;
      padding-left: 10px;
      padding-top: 5px;
      margin-bottom: 20px;
      height: 100px;
      background-color: antiquewhite;
      transition: all 200ms ease-in-out 1s;
    }
  }
`;
