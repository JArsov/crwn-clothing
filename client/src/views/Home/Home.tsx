import Directory from "../../components/Directory/Directory";
import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 5rem;
`;

const Home: React.FC<{}> = props => {
  return (
    <HomeContainer>
      <Directory />
    </HomeContainer>
  );
};
export default Home;
