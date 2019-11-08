import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface HatsMatchParams {
  article: string;
}

const Hats: React.FC<RouteComponentProps<HatsMatchParams>> = ({ match }) => {
  return <div>{match.params.article}</div>;
};

export default Hats;
