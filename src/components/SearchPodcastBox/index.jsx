import React from "react";
import { Box, Container } from "./styles";

function SearchPodcastBox({ podcastImage, podcastName, podcastEpisodes, onClick }) {
  return (
    <>
      <Container>
        <Box onClick={onClick}>
          <div>
            <img src={podcastImage} alt={podcastImage} />
          </div>
          <span>
            <h1>{podcastName}</h1>
            <p>Episodes: <b>{podcastEpisodes}</b></p>
          </span>
        </Box>
      </Container>
    </>
  );
}

export default SearchPodcastBox;
