import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "High School Student",
          "interested in STEM subjects",
          "Looking forward to study biology-related major",
          "fascinated with different kind of art",
          "Cyclist, Depater, and most importantly",
          "active community service volunteer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
