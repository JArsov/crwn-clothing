import { Route, Switch } from "react-router-dom";

import Hats from "./views/Hats/Hats";
import Homepage from "./views/Homepage/Homepage";
import React from "react";

const App: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/shop/:article" component={Hats} />
    </Switch>
  );
};

export default App;
