import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import styled from "styled-components";

const SignInSignUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  width: 80%;

  @media screen and (max-width: 800px) {
    width: unset;
    flex-direction: column;
    align-items: center;
    > *:first-child {
      margin-bottom: 3rem;
    }
  }
`;

const SignInSignUp: React.FC<{}> = () => {
  return (
    <SignInSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInSignUpContainer>
  );
};

export default SignInSignUp;
