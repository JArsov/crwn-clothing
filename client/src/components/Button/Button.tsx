import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 6rem;
  width: auto;
  height: 3rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  padding: 0 2rem;
  font-size: 1rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const StyledGoogleButton = styled(StyledButton)`
  &&& {
    background-color: #4285f4;
    color: white;
    padding: 0 0.6rem;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }
`;

const StyledFacebookButton = styled(StyledButton)`
  &&& {
    background-color: #4267b2;
    color: white;
    padding: 0 1rem;

    &:hover {
      background-color: #3b5998;
      border: none;
    }
  }
`;

export interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  isGoogleSignIn?: boolean;
  isFacebookSignIn?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = props => {
  let ButtonToRender = (
    <StyledButton type={props.type} {...props}>
      {props.children}
    </StyledButton>
  );
  if (props.isGoogleSignIn) {
    ButtonToRender = (
      <StyledGoogleButton type={props.type} {...props}>
        {props.children}
      </StyledGoogleButton>
    );
  } else if (props.isFacebookSignIn) {
    ButtonToRender = (
      <StyledFacebookButton type={props.type} {...props}>
        {props.children}
      </StyledFacebookButton>
    );
  }
  return ButtonToRender;
};

export default Button;
