import React, { Dispatch, FormEvent } from 'react';
import {
  UserActionWithPayload,
  emailSignInStart,
  facebookSignInStart,
  googleSignInStart,
} from '../../store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import { ErrorMessage } from '../StyledComponents/StyledComponents';
import FormInput from '../FormInput/FormInput';
import { RootState } from '../../store/reducers/types/RootState';
import { selectUserErrorMessage } from '../../store/selectors/user/userSelectors';
import styled from 'styled-components';
import useFormInput from '../../shared/useFormInput';

const SignInContainer = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
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

const SignIn = () => {
  const dispatch = useDispatch<Dispatch<UserActionWithPayload>>();
  const email = useFormInput<string>('');
  const password = useFormInput<string>('');
  const userErrorMessage = useSelector<RootState, string>(
    selectUserErrorMessage
  );

  const signInWithGoogleHandler = () => {
    dispatch(googleSignInStart());
  };

  const signInWithFacebookHandler = () => {
    dispatch(facebookSignInStart());
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      emailSignInStart({ email: email.value, password: password.value })
    );
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
          <Button
            type="button"
            onClick={signInWithGoogleHandler}
            isGoogleSignIn={true}
          >
            Sign in with Google
          </Button>
          <Button
            type="button"
            onClick={signInWithFacebookHandler}
            isFacebookSignIn={true}
          >
            Sign in with Facebook
          </Button>
        </ButtonsContainer>
      </FormContainer>
      <ErrorMessage data-testid="sign-in-error-message-label">
        {userErrorMessage}
      </ErrorMessage>
    </SignInContainer>
  );
};

export default SignIn;
