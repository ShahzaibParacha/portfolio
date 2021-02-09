import React, { Component } from "react";
const Mousetrap = require("mousetrap");

const ProjectItem = {
  id: BigInt,
  desc: String,
  name: String,
};

interface Props {}
interface State {
  id: Number;
  desc: string;
  name: string;
}
export default class Project extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      id: 1,
      desc: "Hello",
      name: "Proj 1",
    };

    //this.handleLeftClick = this.handleLeftClick.bind(this);
    //this.handleRightClick = this.handleRightClick.bind(this);
    //Mousetrap.bind('left', function() {  this.setState({ id:  - 1 });});
  }

  //   Mousetrap.bind('left', function() { handleLeft(e) });

  //   handleLeft(event) {
  //     this.props.theFunction(this.state.id);
  //   }

  //Mousetrap.bind('left', function() { handleLeftClick(); });
  //Mousetrap.bind('right', function() { console.log('right'); });

  render() {
    return (
      <body>
        <div className="primary">
          <div id="content"></div>
          <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
          <script>
            document.getElementById('content').innerHTML = marked('# Marked in
            the browser\n\nRendered by **marked**.');
          </script>
          <h1>// project: {this.state.name}</h1>
          <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
          <script>
            document.getElementById('content').innerHTML = marked('# Marked in
            the browser\n\nRendered by **marked**.');
          </script>
          <p>{this.state.desc}</p>
        </div>
      </body>
    );
  }
}
