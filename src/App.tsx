import { Route, Switch } from "react-router-dom";

import Home from "./views/Home/Home";
import React from "react";
import Shop from "./views/Shop/Shop";
import styled from "styled-components";

const AppContainer = styled.div`
  padding: 2rem 4rem;
`;

const App: React.FC<{}> = () => {
  return (
    <AppContainer>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </AppContainer>
  );
};

export default App;
