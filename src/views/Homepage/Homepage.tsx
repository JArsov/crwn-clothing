import Directory from "../../components/Directory/Directory";
import React from "react";
import styled from "styled-components";

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 5rem;
`;

const Homepage: React.FC<{}> = props => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};
export default Homepage;
