import React from "react";
import { Container } from "./styles";

function PodcastBox({ podcastName, podcastImage }) {
  return (
    <Container>
      <img src={podcastImage} alt={podcastName} />
      <p>{podcastName}</p>
    </Container>
  );
}

export default PodcastBox;
