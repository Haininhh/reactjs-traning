import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "../routes/Route";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              component={route.component}
            ></Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
