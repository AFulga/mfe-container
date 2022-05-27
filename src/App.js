import React from "react";
import { HashRouter, Link, Route, Switch, useHistory } from 'react-router-dom';

import Home from "./Home";

function App() {

  return (
      <HashRouter>
        <Switch>
          <Route
            path="/"
            render={ props => {
              const Component = Home;
              return <Component {...props} />
            }}
          />
        </Switch>
      </HashRouter>
  );
}

export default App;
