import Collection from "../Collection/Collection";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import React from "react";
import { Route } from "react-router-dom";
import { RouteComponentProps } from "react-router";

const Shop: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <div>
      <Route path={match.path} exact component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
