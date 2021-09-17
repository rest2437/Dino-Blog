import React, { useState } from "react";
import Comment from "./Comment";
import { Alert } from "react-bootstrap";
// import { VFXSpan } from "react-vfx";

function Dino(props) {
  let [state, setState] = useState({
    body: props.body,
    tempBody: "",
  });
  let allComments = props.comments.map(function (c, i) {
    return <Comment key={i} body={c} />;
  });
  function handleBodyEdit() {
    let input = prompt("Whats the new edit for the blog post");
    setState({ body: input });
  }

  function handleFormEdit(e) {
    e.preventDefault();
    setState({ body: state.tempBody });
  }
  return (
    <div className="dino">
      <h1 className="A">{props.title}</h1>
      <h2 className="B">by: {props.author}</h2>
      <form onSubmit={handleFormEdit}>
        <label htmlFor="body">Add new Blog post:</label>
        <input
          type="text"
          name="body"
          onChange={(e) => setState({ tempBody: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      <Alert variant="success">
        <Alert.Heading>New Blog post</Alert.Heading>
        <p>
          <h2 className="C">{state.body}</h2>
          <button onClick={handleBodyEdit}>Edit post</button>
        </p>
        <hr />
        <p className="mb-0">{props.author}</p>
      </Alert>

      <h2 className="D">Comments:</h2>
      <h2 className="E">{allComments}</h2>
    </div>
  );
}
export default Dino;
