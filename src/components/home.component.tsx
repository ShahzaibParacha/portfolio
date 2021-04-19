import React from "react";
import "./style.css";

const Home = () => {
    return (
      <body>
        <div className="primary">
          <h1>// portfolio.tsx </h1>
          <h1>// </h1>
          <h1>
            // navigate with arrow keys.<span className="blinker"></span>
          </h1>
          <h1>// </h1>
          <h1>
            // Created by Shahzaib Paracha.
          </h1>
          <h1>// Copyright © {yyyy}. All rights reserved. </h1>
          <br />
          <br />
          <h1>
            const github = {" "}
            <a href="https://github.com/ShahzaibParacha">ShahzaibParacha</a>
          </h1>
          {
            <h1>
              const resume = <a href="/resume">./docs/Resume.pdf</a>
            </h1>
          }
        </div>
        {
          <section className="secondary">
            <h3>legend</h3>
            <li>
              <span className="material-icons">chevron_left</span>
              <span className="material-icons">chevron_right</span> projects
            </li>
            <li>
              <span className="material-icons">expand_less</span>
              <span className="material-icons">expand_more</span> experience
            </li>
            <li>r resume</li>
          </section>
        }
      </body>
    );
}

var today = new Date();
const yyyy = today.getFullYear();

export default Home;