import styled from "styled-components"

export const Container = styled.div`
    width: 160px;
    height: 220px;
    img{
        width: 160px;
        margin-bottom: 10px;
    }
    p{
        font-weight: 600;
    }

    &.empty{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 100vw;
     img{
        width: 100px;
     }
    }
`