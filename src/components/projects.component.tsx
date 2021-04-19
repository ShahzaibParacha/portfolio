import React, { useState } from "react";
import { useKeyPressEvent } from "react-use";

const state = {
  name: "jake",
  desc: "blake",
};

const Project = () => {
  const Demo = () => {
    const [udcount, setUDCount] = useState(10);
    const [lrcount, setLRCount] = useState(10);


    const incrementUD = () => setUDCount((udcount) => ++udcount);
    const decrementUD = () => setUDCount((udcount) => --udcount);
    const resetUD = () => setUDCount((udcount) => 0);

    const incrementLR = () => setLRCount((lrcount) => ++lrcount);
    const decrementLR = () => setLRCount((lrcount) => --lrcount);
    const resetLR = () => setLRCount((lrcount) => 0);

    useKeyPressEvent("w", incrementUD);
    useKeyPressEvent("s", decrementUD);
    useKeyPressEvent("p", resetUD);

    useKeyPressEvent("a", incrementLR);
    useKeyPressEvent("d", decrementLR);
    useKeyPressEvent("r", resetLR);

    return (
      <div>
        <h1>Count Up/Down: {udcount}</h1>
        <h1>Count Left/Right: {lrcount}</h1>
      </div>
    );
  };
  return (
    <body>
      <div className="primary">
        <h1>// project: {state.name}</h1>
        <h1>{state.desc}</h1>
        {Demo()}
      </div>
    </body>
  );
};

export default Project;
