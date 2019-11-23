import React, { Dispatch, FormEvent } from "react";
import {
  UserActionWithPayload,
  signUpStart
} from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import Button from "../Button/Button";
import { ErrorMessage } from "../StyledComponents/StyledComponents";
import FormInput from "../FormInput/FormInput";
import { RootState } from "../../store/reducers/types/RootState";
import { selectUserErrorMessage } from "../../store/selectors/user/userSelectors";
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
  const userErrorMessage = useSelector<RootState, string>(
    selectUserErrorMessage
  );
  const dispatch = useDispatch<Dispatch<UserActionWithPayload>>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      signUpStart({
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        displayName: displayName.value
      })
    );
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
      <ErrorMessage>{userErrorMessage}</ErrorMessage>
    </SignUpContainer>
  );
};

export default SignUp;
