import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home.component";
import Error from "./components/error.component";
import Project from "./components/projects.component";
import Resume from "./components/resume.component";
import {useKeyPressEvent} from 'react-use';


function App() {

  const Demo = () => {
    const [count, setCount] = useState(10);
  
    const increment = () => setCount(count => ++count);
    const decrement = () => setCount(count => --count);
    const reset = () => setCount(count => 0);
  
    useKeyPressEvent('left', increment, increment);
    useKeyPressEvent('right', decrement, decrement);
    useKeyPressEvent('h', reset);
  
    return (
      <div>
        <p>
          Try pressing <code>[</code>, <code>]</code>, and <code>r</code> to
          see the count incremented and decremented.</p>
        <p>Count: {count}</p>
      </div>
    );
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact component= {Home}/>
        <Route path="/projects" exact component= {Project}/>
        <Route path="/resume" exact component= {Resume}/>
        <Route path="/404" exact component={Error} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}


export default App;
