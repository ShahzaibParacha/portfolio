import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Display from "./components/main.component";
import Error from "./components/error.component";
import Project from "./components/projects.component";
import Resume from "./components/resume.component";
import Me from "./components/me.component";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Display}/>
        <Route path="/projects" exact component={Project}/>        
        <Route path="/Me" exact component={Me}/>
        <Route path="/resume" exact component={Resume}/>
        <Route path="/404" exact component={Error} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
