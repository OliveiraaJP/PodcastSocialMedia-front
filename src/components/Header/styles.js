import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  height: 12vh;
  padding: 20px 20px;
  display: flex;
  background-color: #202020;

  span {
    display: flex;
    align-items: center;
    width: 100%;

    input {
      padding: 10px;
      width: 100vw;
      background-color: #202020;
      border: none;
      color: white;
      border-bottom: 1px solid wheat;
      transition: none;
      :focus {
        background-color: #202020;
        border: none;
        color: white;
        border-bottom: 1px solid wheat;
        transition: none;
      }
    }

    p {
      font-weight: 700;
      font-size: 1.3em;
      color: #666600;
    }

    img {
      border-radius: 100%;
      width: 53px;
      object-fit: contain;
      margin-right: 10px;
    }
  }

  div {
    position: absolute;
    right: 15px;
    display: flex;
    align-items: center;

    .react-icon {
      size: 80px;
    }
  }

  &.react-icon {
    size: 400px;
  }
`;
