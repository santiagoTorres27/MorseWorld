import React, { useState } from "react";
import ReactHowler from "react-howler";

const MorseLetter = ({ letter }) => {
  const callMySound = () => {
    const sound = new Howl({
      src: letter.sound,
      html5: true,
      preload: true,
    });
    sound.play();
  };

  return (
    <div className="morse-letter">
      <h3>{letter.letter.toUpperCase()}</h3>
      <p>{letter.morse_code}</p>

      <button
        onClick={() => {
          callMySound();
        }}
      >
        <img src="./public/img/audio.png" alt="" />
      </button>
    </div>
  );
};

export default MorseLetter;
