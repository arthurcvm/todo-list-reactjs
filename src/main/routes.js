import React from "react";
import { Route, HashRouter } from "react-router-dom";

import Todo from "../todo/Todo";
import About from "../about/About";

const Routes = (props) => (
  <HashRouter>
    <Route exact path="/" component={Todo} />
    <Route exact path="/todos" component={Todo} />
    <Route exact path="/about" component={About} />
  </HashRouter>
);

export default Routes;
