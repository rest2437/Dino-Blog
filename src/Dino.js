import React from "react";
import Comment from "./Comment";

function Dino(props) {
  return (
    <div className="dino">
      <h1 className="A">{props.title}</h1>
      <h2 className="B">by: {props.author}</h2>
      <h2 className="C">{props.body}</h2>
      <h2 className="D">Comments:</h2>
      <h2 className="E">{props.comments[0]}</h2>
    </div>
  );
}
export default Dino;
