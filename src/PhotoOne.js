import React from "react";
import { VFXImg } from "react-vfx";

function PhotoOne(prop) {
  return (
    <div id="photos">
      <h3>Dino model and app.js</h3>
      <VFXImg src="/photo1.png" shader="rgbShift" />
      <VFXImg src="/photo2.png" shader="rgbShift" />

      {/* <img src="/photo1.png"></img>
      <img src="/photo2.png"></img> */}
    </div>
  );
}

export default PhotoOne;
