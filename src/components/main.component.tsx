import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useKeyPressEvent } from "react-use";
import "./style.css";

const Projects = [
  {
    name: "Go Ether Me",
    tag: "decentralized crowdfunding",
    description: "",
  },
  {
    name: "Freadom",
    tag: "track your readings",
    description: "",
  },
  {
    name: "noodle",
    tag: "notes+doodle",
    description: "",
  },
  {
    name: "R-EMOTE",
    tag: "access smart home from webcam",
    description: "",
  },
];

const Work = [
  {
    name: "Upfeat",
    title: "Software Developer Co-op (Full Stack)",
    description: "upft",
  },
  {
    name: "Laivly",
    title: "Junior Machine Learning Engineer",
    description: "lvly",
  },
];
let change: string;

const Display = () => {
  const maxUD = Projects.length;
  const maxLR = Work.length;
  const [udcount, setUDCount] = useState(-1);
  const [lrcount, setLRCount] = useState(-1);
  const history = useHistory();

  const incrementUD = () => {
    setUDCount((udcount) => Math.abs(++udcount % maxUD));
    change = "Project";
  };
  const decrementUD = () => {
    setUDCount((udcount) => Math.abs((--udcount + maxUD) % maxUD));
    change = "Project";
  };

  const resetUD = () => {
    setLRCount((lrcount) => 0);
    change = "Reset";
  };

  const incrementLR = () => {
    setLRCount((lrcount) => Math.abs(++lrcount % maxLR));
    change = "Work";
  };

  const decrementLR = () => {
    setLRCount((lrcount) => Math.abs((--lrcount + maxLR) % maxLR));
    change = "Work";
  };

  const resetLR = () => {
    setLRCount((lrcount) => 0);
    change = "Reset";
  };

  const showResume = () => {
    change = "Resume";
  };

  useKeyPressEvent("w", incrementUD);
  useKeyPressEvent("ArrowUp", incrementUD);
  useKeyPressEvent("s", decrementUD);
  useKeyPressEvent("ArrowDown", decrementUD);
  useKeyPressEvent("h", resetUD);

  useKeyPressEvent("d", incrementLR);
  useKeyPressEvent("ArrowRight", incrementLR);
  useKeyPressEvent("a", decrementLR);
  useKeyPressEvent("ArrowLeft", decrementLR);
  useKeyPressEvent("h", resetLR);

  useKeyPressEvent("r", showResume);
  
  if (change === "Work") {
    return (
      <body>
        <div className="primary">
          <h1>
            {lrcount + 1}. {Work[lrcount].name}
          </h1>
          <h3>{Work[lrcount].title}</h3>
          <p>{Work[lrcount].description}</p>
        </div>
        <section className="secondary">
          <h3>legend</h3>
          <li>w,s projects</li>
          <li>a,d experience</li>
          <li>r resume</li>
          <li>h home</li>
        </section>
      </body>
    );
  } else if (change === "Project") {
    return (
      <body>
        <div className="primary">
          <h1>
            {udcount + 1}. {Projects[udcount].name}
          </h1>
          <h3>{Projects[udcount].tag}</h3>
          <p>{Projects[udcount].description}</p>
        </div>
        <section className="secondary">
          <h3>legend</h3>
          <li>w,s projects</li>
          <li>a,d experience</li>
          <li>r resume</li>
          <li>h home</li>
        </section>
      </body>
    );
  } else if (change === "Reset") {
    return (
      <body>
        <div className="primary">
          <h1>my portfolio</h1>
          <br />
          <h1>
            navigate with arrow keys.<span className="blinker"></span>
          </h1>
          <br />
          <h1>Created by Shahzaib Paracha.</h1>
          <h1>Copyright © {yyyy}. All rights reserved. </h1>
          <br />
          <br />
          <h1>
            github ={" "}
            <a href="https://github.com/ShahzaibParacha">ShahzaibParacha</a>
          </h1>
          <h1>
            resume = <a href="/resume">./docs/Resume.pdf</a>
          </h1>
        </div>
        <section className="secondary">
          <h3>legend</h3>
          <li>w,s projects</li>
          <li>a,d experience</li>
          <li>r resume</li>
          <li>h home</li>
        </section>
      </body>
    );
  } else if (change === "Resume") {
    history.push("Resume_ShahzaibParacha.pdf");
    return (
      <body>
        {/* <div className="primary">
          <a href="Resume_ShahzaibParacha.pdf" download>
            <h1>resume</h1>
          </a>
        </div> */}
      </body>
    );
  } else {
    return (
      <body>
        <div className="primary">
          <h1>my portfolio</h1>
          <br />
          <h1>
            navigate with arrow keys.<span className="blinker"></span>
          </h1>
          <br />
          <h1>Created by Shahzaib Paracha.</h1>
          <h1>Copyright © {yyyy}. All rights reserved. </h1>
          <br />
          <br />
          <h1>
            github ={" "}
            <a href="https://github.com/ShahzaibParacha">ShahzaibParacha</a>
          </h1>
          <h1>
            resume = <a href="/resume">./docs/Resume.pdf</a>
          </h1>
        </div>
        <section className="secondary">
          <h3>legend</h3>
          <li>w,s projects</li>
          <li>a,d experience</li>
          <li>r resume</li>
          <li>h home</li>
        </section>
      </body>
    );
  }
};

var today = new Date();
const yyyy = today.getFullYear();

export default Display;
