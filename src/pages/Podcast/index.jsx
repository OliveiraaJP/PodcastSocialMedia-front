import React, { useContext, useEffect, useState } from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { useParams, Link } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { Container } from "./styles";
import * as podcastService from "../../services/podcastService.js";
import Loading from "../../utils/Loading";
import Footer from "../../components/Footer";

function Podcast() {
  const { userData } = useContext(UserContext);
  const { id } = useParams();
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };
  const [star, setStar] = useState('')
  console.log(id);
  const [singlePodcast, setSinglePodcast] = useState({});
  useEffect(() => {
    const promise = podcastService.getOnePodcast(id, config);
    promise.then((data) => setSinglePodcast(data.data));
    promise.catch((err) => console.log(err));
  }, []);

  

  return Object.keys(singlePodcast).length > 0 ? (
    <Container>
      <header>
        <Link to="/homepage">
          <BsArrowBarLeft size="40px" color="#666600" />
        </Link>
        <span>
          {function(){
            if(star === "full"){
              return (
                <AiFillStar
                size="40px"
                color="#666600"
                onClick={() => {
                  podcastService.handleFavoritePodcast(singlePodcast.id, config);
                  setStar("empty")
                }}
              />
              )
            } else if (star === "empty"){
              return (
                <AiOutlineStar
                size="40px"
                color="#666600"
                onClick={() => {
                  podcastService.handleFavoritePodcast(singlePodcast.id, config);
                  setStar("full")
                }}
              />
              )
            } else if (singlePodcast.PodcastLikes.length > 0){
              return (
                <AiFillStar
                size="40px"
                color="#666600"
                onClick={() => {
                  podcastService.handleFavoritePodcast(singlePodcast.id, config);
                  setStar("empty")
                }}
              />
              )
            } else if (singlePodcast.PodcastLikes.length === 0){
              return (
                <AiOutlineStar
                size="40px"
                color="#666600"
                onClick={() => {
                  podcastService.handleFavoritePodcast(singlePodcast.id, config);
                  setStar("full")
                }}
              />
              )
            }
          }()}
          <img src={userData.usrImage} alt={userData.usrImage} />
        </span>
      </header>
      <main>
        <img src={singlePodcast.image} alt="" />
        <h1>{singlePodcast.name}</h1>
        <h3>{singlePodcast.beginAt}</h3>
        <p>{singlePodcast.description}</p>
      </main>
      <Footer/>
    </Container>
  ) : (
    <Container>
      <Loading />
    </Container>
  );
}

export default Podcast;
