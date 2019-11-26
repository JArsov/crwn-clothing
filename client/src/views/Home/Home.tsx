import Directory from "../../components/Directory/Directory";
import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home: React.FC<{}> = props => {
  return (
    <HomeContainer>
      <Directory />
    </HomeContainer>
  );
};
export default Home;