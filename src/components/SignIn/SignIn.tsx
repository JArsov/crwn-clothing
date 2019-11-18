import React, { FormEvent, useState } from "react";
import {
  auth,
  signInWithFacebook,
  signInWithGoogle
} from "../../firebase/firebase.utils";

import Button from "../Button/Button";
import { ErrorMessage } from "../StyledComponents/StyledComponents";
import FormInput from "../FormInput/FormInput";
import styled from "styled-components";
import useFormInput from "../../shared/useFormInput";

const SignInContainer = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
`;

const SignInTitle = styled.h2`
  margin: 0.6rem 0;
`;

const FormContainer = styled.form`
  margin-top: 2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OrLabel = styled.div`
  min-width: 6rem;
  text-align: center;
  margin: 1rem auto;
`;

const SignInButton = styled(Button)`
  width: 100%;
  margin-top: 2rem;
`;

const SignIn: React.FC<{}> = () => {
  const email = useFormInput<string>("");
  const password = useFormInput<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email.value, password.value);
      email.setValue("");
      password.setValue("");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Incorrect username/password combination");
    }
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          {...email}
          id="signInEmail"
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          {...password}
          id="signInPassword"
          required
        />
        <SignInButton type="submit">Sign in</SignInButton>
        <OrLabel>or...</OrLabel>
        <ButtonsContainer>
          <Button onClick={signInWithGoogle} isGoogleSignIn={true}>
            Sign in with Google
          </Button>
          <Button onClick={signInWithFacebook} isFacebookSignIn={true}>
            Sign in with Facebook
          </Button>
        </ButtonsContainer>
      </FormContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </SignInContainer>
  );
};

export default SignIn;
