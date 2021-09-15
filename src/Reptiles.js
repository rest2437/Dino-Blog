import React from "react";

function Reptiles(props) {
  return (
    <div className="reptiles">
      <h2>Reptiles during the time of Dinosaurs include:</h2>
      <h3>{props.list}</h3>
    </div>
  );
}

export default Reptiles;
