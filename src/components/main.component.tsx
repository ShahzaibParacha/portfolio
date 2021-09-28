import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useKeyPressEvent } from "react-use";
import "./style.css";

const Projects = [
  {
    name: "Mapworks",
    tag: "A web application to visualize the algorithm utilied by Google Maps on... a Map.",
    github: "",
    description: "",
  },
  {
    name: "MageBank",
    tag: "A web application that enables users to have a personal online Image Storage with caching, backed on the cloud with secure uploads and deletes.",
    github: "https://github.com/ShahzaibParacha/MageBank",
    description: "",
  },
  {
    name: "Go Ether Me",
    tag: "A web application based on the Ethereum blockchain network allowing users to host projects for crowdfunding and fund existing projects, with eachproject and transaction recorded on the Blockchain.",
    github: "https://github.com/ShahzaibParacha/Go-Ether-Me",
    description: "",
  },
  {
    name: "SmartKitchen",
    tag: "A list management system for kitchen inventory, grocery list, and recipes to allow users to manage inventory and meal prep with current inventory,designed and implemented with a group following Agile techniques and TDD.",
    github: "https://github.com/ShahzaibParacha/SmartKitchen",
    description: "",
  },
  {
    name: "R-EMOTE",
    tag: "An algorithm that implements a Convolutional Neural Network to detects hand gestures in real-time through your webcam to control smart appliances, and present the detected gesture as an animated emote.",
    github: "https://github.com/ShahzaibParacha/R-Emote",
    description: "",
  },
];

const Work = [
  {
    name: "Upfeat",
    title: "Junior Software Developer (Full Stack)",
    description:
      "i am contributing to revamp the visual appearance and overhaul the front-end performance of many of our White Label partner sites.",
  },
  {
    name: "Upfeat",
    title: "Software Developer Co-op (Full Stack)",
    description: `i worked with the Laravel, MySql, VueJS stack using SCSS on the front-end. i contributed by adding features, caching, and changes 
    on the front-end that rejuvenate the user experience of our affiliate pages that are served to our white label partners like business 
    insider au, forbes, marie claire, news.com.au and more. i also worked with Elasticsearch to improve data collection for these partners.`,
  },
  {
    name: "Laivly",
    title: "Junior Machine Learning Engineer",
    description: `i worked on both internal and external tools surrounding machine learning. one of my prominent contributions was to train, test and
     deploy transformer-based models for the cosmetics conglomerate Ulta Beauty who were looking to improve their email handling time, and the model performed near
     lab accurate in beta testing. i also developed a data processing library and started developing a data cleaning pipeline to automate 
     routine data cleaning tasks that would integrate with the automated internal machine learning pipeline.`,
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
        <br />
        <h2>my work in the industry</h2>
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
        <br />
        <h2>my personal projects</h2>
        <div className="primary">
          <h1>
            {udcount + 1}.{" "}
            <a href={Projects[udcount].github}>{Projects[udcount].name} </a>
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
    history.push("/resume");
    return <body></body>;
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
