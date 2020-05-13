import React from "react";
import clipboard from "clipboard-copy";

const copy = require("clipboard-copy");

function Card(props) {
  const firstColor = props.firstColor;
  const secondColor = props.secondColor;
  const thirdColor = props.thirdColor;
  const fourthColor = props.fourthColor;

  function testlog(props) {
    copy("This is some cool text");
    return console.log();
  }

  return (
    <div class="card">
      <h2>{props.name}</h2>
      <div class="color-container">
        <div class="color-item">
          <div
            class="color-square"
            onClick={() => copy(firstColor)}
            style={{ backgroundColor: firstColor }}
          >
            <i class="fas fa-eye-dropper"></i>
          </div>
          <p>{firstColor}</p>
        </div>
        <div class="color-item">
          <div
            class="color-square"
            onClick={() => copy(secondColor)}
            style={{ backgroundColor: secondColor }}
          >
            <i class="fas fa-eye-dropper"></i>
          </div>
          <p>{secondColor}</p>
        </div>
        <div class="color-item">
          <div
            class="color-square"
            onClick={() => copy(thirdColor)}
            style={{ backgroundColor: thirdColor }}
          >
            <i class="fas fa-eye-dropper"></i>
          </div>
          <p>{thirdColor}</p>
        </div>
        <div class="color-item">
          <div
            class="color-square"
            onClick={() => copy(fourthColor)}
            style={{ backgroundColor: fourthColor }}
          >
            <i class="fas fa-eye-dropper"></i>
          </div>
          <p>{fourthColor}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
