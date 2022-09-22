import React from "react";
import { Container } from "./styles";

function Comments({ commentProfileImage, commentText, commentUsername }) {
  return (
    <Container>
      <img src={commentProfileImage} alt={commentProfileImage} />
      <span>
        <h4>
          Review by: <b>{commentUsername}</b>
        </h4>
        <p>{commentText}</p>
      </span>
    </Container>
  );
}

export default Comments;
