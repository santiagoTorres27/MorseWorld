import React from "react";
import MorseAlphabet from "../components/MorseAlphabet";

const LettersPage = () => {
  return (
    <div className="letters container">
      {/* Information */}
      <div className="letters__information">
        <img src="./public/img/information.png" alt="" />
        <div>
          <p>
            The dit duration is the basic unit of time measurement in Morse code
          </p>
          <p>The duration of a dah is three times the duration of a dit</p>
          <p>
            Each dit or dah within an encoded character is followed by a period
            of signal absence
          </p>
        </div>
      </div>

      {/* Indications */}
      <div className="letters__indications">
        <div className="letters__indication-item">
          <h4>Dot</h4>
          <p>1 unit of time</p>
        </div>

        <div className="letters__indication-item">
          <h4>Dash</h4>
          <p>3 units of time</p>
        </div>

        <div className="letters__indication-item">
          <h4>Pause between dots and dashes</h4>
          <p>1 unit of time</p>
        </div>

        <div className="letters__indication-item">
          <h4>Pause between letters</h4>
          <p>3 units of time</p>
        </div>

        <div className="letters__indication-item">
          <h4>Pause between words</h4>
          <p>7 units of time</p>
        </div>
      </div>

      {/* Letters */}
      <MorseAlphabet />
    </div>
  );
};

export default LettersPage;
