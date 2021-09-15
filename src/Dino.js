import React from "react";

function Dino(props) {
  return (
    <div>
      <h1 className="A">{props.title}</h1>
      <h2 className="B">by: {props.author}</h2>
      <h2 className="C">{props.body}</h2>
      <h2 className="D">Comments:</h2>
      <h2 className="E">{props.comments[0]}</h2>
    </div>
  );
}
export default Dino;
