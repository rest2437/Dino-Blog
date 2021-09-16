import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Dino from "./Dino";
import PhotoOne from "./PhotoOne";
import Reptiles from "./Reptiles";

function App() {
  let dino = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property",
    comments: ["First!", "Great Post", "Hire this author now!"],
  };
  let reptiles = {
    list: "Crocodiles, Snakes",
  };
  return (
    <div className="App">
      <Dino
        title={dino.title}
        author={dino.author}
        body={dino.body}
        comments={dino.comments}
      />
      <Reptiles list={reptiles.list} />
      <PhotoOne />
    </div>
  );
}

export default App;
