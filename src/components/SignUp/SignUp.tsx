import React, { FormEvent, useState } from "react";
import {
  auth,
  createUserProfileDocument,
  doesEmailExist
} from "../../firebase/firebase.utils";

import Button from "../Button/Button";
import { ErrorMessage } from "../StyledComponents/StyledComponents";
import FormInput from "../FormInput/FormInput";
import styled from "styled-components";
import useFormInput from "../../shared/useFormInput";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32rem;
`;

const SignUpTitle = styled.h2`
  margin: 0.6rem 0;
`;

const SignUpForm = styled.form`
  margin-top: 2rem;
`;

const SignUpButton = styled(Button)`
  margin-top: 1rem;
`;

export const SignUp: React.FC<{}> = () => {
  const displayName = useFormInput<string>("");
  const email = useFormInput<string>("");
  const password = useFormInput<string>("");
  const confirmPassword = useFormInput<string>("");
  const [emailExistsErrorMessage, setEmailExistsErrorMessage] = useState<
    string
  >("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setEmailExistsErrorMessage("");
    event.preventDefault();

    if (password.value !== confirmPassword.value) {
      setEmailExistsErrorMessage("Passwords do not match!");
      return;
    }

    const emailExists = await doesEmailExist(email.value);

    if (emailExists) {
      setEmailExistsErrorMessage("Email address already exists!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );
      await createUserProfileDocument(user, { displayName: displayName.value });

      displayName.setValue("");
      email.setValue("");
      password.setValue("");
      confirmPassword.setValue("");
    } catch (error) {
      setEmailExistsErrorMessage("An error occured during sign up");
    }
  };
  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <SignUpForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          {...displayName}
          label="Display Name"
          id="signUpDisplayName"
          required
        />
        <FormInput
          type="email"
          name="email"
          {...email}
          label="Email"
          id="signUpEmail"
          required
        />
        <FormInput
          type="password"
          name="password"
          {...password}
          label="Password"
          id="signUpPassword"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          {...confirmPassword}
          label="Confirm Password"
          id="signUpConfirmPassword"
          required
        />
        <SignUpButton type="submit">SIGN UP</SignUpButton>
      </SignUpForm>
      <ErrorMessage>{emailExistsErrorMessage}</ErrorMessage>
    </SignUpContainer>
  );
};

export default SignUp;
