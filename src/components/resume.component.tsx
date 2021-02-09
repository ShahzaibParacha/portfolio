import React, { Component } from "react";
import ResumeFile from '../docs/Resume.png';


export default class Resume extends Component {
  render() {
    return (
      <body>
        <div className="primary">
          <h1>// resume</h1>
          <img src={ResumeFile} width='1000' height="1294.1" />
        </div>
      </body>
    );
  }
}
