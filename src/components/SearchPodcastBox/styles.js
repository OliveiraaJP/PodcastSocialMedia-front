import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  background-color: #e0e0e0;
  padding: 5px;
  margin-bottom: 15px;
  border: 1px solid #666600;
  overflow: hidden;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        margin-right: 15px;
        height: 100px;
        font-family: 'Karla';
        font-weight:600;
    }

    span{
        h1{
            font-size: 1.5em;
        }
        b{
            font-weight: bold;
            color: #010101;
        }
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`;
