import React, { useContext, useEffect, useState } from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { useParams, Link } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { Container } from "./styles";
import * as podcastService from "../../services/podcastService.js"

function Podcast() {
  const { userData } = useContext(UserContext);
  const { id } = useParams();
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };
  console.log(id);
  const [singlePodcast, setSinglePodcast] = useState([])
  useEffect(() => {
      const promise = podcastService.getOnePodcast(id, config)
      promise.then(data => setSinglePodcast(data.data))
  }, [])
  
  return (
    <Container>
      <header>
        <Link to="/homepage">
        <BsArrowBarLeft size="40px" color="#666600"/>
        </Link>
        <span>
          <AiOutlineStar size="40px" color="#666600"/>
          <AiFillStar size="40px" color="#666600"/>
          <img src={userData.usrImage} alt={userData.usrImage} />
        </span>
      </header>
      <main>
        <img src={singlePodcast.image} alt="" />
        <h1>{singlePodcast.name}</h1>
        <h3>{singlePodcast.beginAt}</h3>
        <p>{singlePodcast.description}</p>
      </main>
    </Container>
  );
}

export default Podcast;
