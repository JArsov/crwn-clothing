import React, { FormEvent } from "react";

import styled from "styled-components";
import { subColor } from "../../shared/styles.variables";

const FromInputContainer = styled.div`
  position: relative;
  margin: 1rem 0;
`;

const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  pointer-events: none;
  transition: 300ms ease all;
`;

const FormInputField = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.2rem;
  padding: 0.6rem 0.6rem 0.6rem 0.3rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};

  &:focus {
    outline: none;
  }
`;

export interface FormInputProps {
  handleChange: (event: FormEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  value: string;
  label: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = props => {
  return (
    <FromInputContainer>
      {props.label ? (
        <FormInputLabel {...props} htmlFor={props.name}>
          {props.label}
        </FormInputLabel>
      ) : null}
      <FormInputField
        id={props.name}
        onChange={props.handleChange}
        {...props}
      />
    </FromInputContainer>
  );
};

export default FormInput;
