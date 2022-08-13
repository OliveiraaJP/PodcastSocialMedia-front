import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
  transition: all 200ms ease-in-out 0s;
`;

export const Box = styled.div`
    width: 100%;
    min-height: 200px;
    background-color: #E0E0E0;
    border: 1px solid #666600;
    padding: 5px;
    margin-bottom: 15px;

    header{
      height: 15%;
      margin-bottom: 10px;
      width: 100%;
      /* background-color: orange; */
      font-family: 'Karla', sans-serif;
      font-weight: 500;
      font-size: 1.3em;
    }

    main{
      width: 100%;
      height: 85%;
      /* background-color: beige; */
      overflow-y: scroll;
      display: flex;
      gap: 15px;

        div{
          height: 100%;
          width: 300px;
        }
    }
`
