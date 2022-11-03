import React, { useState } from "react";
import alphabetList from "../data/alphabet";
import MorseLetter from "./MorseLetter";

const MorseAlphabet = () => {
  const [list] = useState(alphabetList);

  return (
    <div className="morse-alphabet">
      {list.map((item) => {
        return <MorseLetter key={item.id} letter={item} />;
      })}
    </div>
  );
};

export default MorseAlphabet;
