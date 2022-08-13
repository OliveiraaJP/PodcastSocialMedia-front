import React from "react";
import { Container } from "./styles";

function PodcastBox({ podcastName, podcastImage, onClick, className }) {
  return (
    <Container onClick={onClick} className={className}>
      <img src={podcastImage} alt={podcastName} />
      <p>{podcastName}</p>
    </Container>
  );
}

export default PodcastBox;
