import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  transition: all 200ms ease-in-out 0s;
  padding: 0 5%;
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px dashed black;

    img{
        border-radius: 180px;
        width: 40px;
        object-fit: contain;
        margin-right: 20px;
    }

    span{
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        h4{
            color: gray;
            font-size: 0.8em;
            
        }

        b{
            font-weight: 600;
            color: black;
            margin-left: 6px;
        }

        p{
            color: purple;
        }
    }
`
