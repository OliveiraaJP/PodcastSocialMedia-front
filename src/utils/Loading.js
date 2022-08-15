import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingPage>
      <ThreeDots
        type="ThreeDots"
        color="#666600"
        height={40}
        width={80}
        timeout={10000}
      />
    </LoadingPage>
  );
};

export default Loading;

const LoadingPage = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`