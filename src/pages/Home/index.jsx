import * as podcastService from "../../services/podcastService.js";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchPodcastBox from "../../components/SearchPodcastBox/index.jsx";
import PodcastBox from "../../components/PodcastBox";
import UserContext from "../../contexts/userContext";
import { Box, Container } from "./styles";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  console.log(userData);
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };

  const [allPodcasts, setAllPodcasts] = useState([]);
  const [favPodcasts, setFavPodcasts] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const promise = podcastService.getAllPodcasts(config);
    const promiseFav = podcastService.getFavoritePodcast(config);

    promise.then((res) => {
      setAllPodcasts(res.data);
    });
    promiseFav.then((res) => {
      setFavPodcasts(res.data);
    });

    promise.catch((err) => console.log(err));
    promiseFav.catch((err) => console.log(err));

    promise.finally(() => setReload(!true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  const [busca, setBusca] = useState("");

  const lowerSearch = busca.toLocaleLowerCase();

  const filteredPodcasts = allPodcasts.filter((podcast) =>
    podcast.name.trim().toLowerCase().includes(lowerSearch)
  );

  function searchBar(e) {
    setBusca(e.target.value);
    if (e.nativeEvent.data === "[") setBusca("");
  }

  return (
    <>
      {userData.token === null && <p>TEM QUE LOGAR MERMAO</p>}
      {userData.token !== null && (
        <>
          <Header
            username={userData.usrName}
            imageUrl={userData.usrImage}
            searchBarFunction={searchBar}
            value={busca}
          />
          {busca.length === 0 && (
            <Container>
              <Box>
                <header>Favorite podcasts</header>
                <main>
                  {favPodcasts.length > 0 &&
                    favPodcasts.map((pod, i) => {
                      const { podcastRef } = pod;
                      return (
                        <PodcastBox
                          podcastImage={podcastRef.image}
                          podcastName={podcastRef.name}
                          onClick={() => navigate(`/podcast/${podcastRef.id}`)}
                        />
                      );
                    })}
                </main>
              </Box>
              <Box>
                <header>Recently added</header>
                <main>
                  {allPodcasts.length > 0 &&
                    allPodcasts.map((pod, i) => {
                      while (i < 5) {
                        return (
                          <PodcastBox
                            podcastImage={pod.image}
                            podcastName={pod.name}
                            key={i}
                            onClick={() => navigate(`/podcast/${pod.id}`)}
                          />
                        );
                      }
                      return <></>;
                    })}
                </main>
              </Box>
            </Container>
          )}
          {busca.length > 0 &&
            filteredPodcasts.map((pod, i) => {
              return (
                <SearchPodcastBox
                  podcastEpisodes={pod.episodes}
                  podcastImage={pod.image}
                  podcastName={pod.name}
                  key={i}
                  // eslint-disable-next-line no-undef
                  onClick={() => navigate(`/podcast/${pod.id}`)}
                />
              );
            })}
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
