import React from "react";

const state = {
  name: "jake",
  desc: "blake",
};

const Project = () => {
  return (
    <body>
      <div className="primary">
        <h1>project: {state.name}</h1>
        <h1>{state.desc}</h1>
      </div>
    </body>
  );
};

export default Project;
