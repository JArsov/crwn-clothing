import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import styled from "styled-components";

const SignInSignUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  width: 80%;
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
