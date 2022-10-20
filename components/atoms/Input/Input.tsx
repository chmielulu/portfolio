import React, { FC } from 'react';
import { StyledWrapper, StyledInput, StyledText } from './Input.styles';

const Input: FC<Props> = ({type, className, isError, required, placeholder, ...props}) => {
  return (
    <StyledWrapper className={className}>
      <StyledInput
        placeholder=" "
        $isError={isError}
        required={required}
        {...props}
      />
      <StyledText $isError={isError}>
        {required ? "*" : undefined}
        {placeholder}
      </StyledText>
    </StyledWrapper>
  );
}

interface Props {
  type?: "text" | "password" | "email";
  isError?: boolean;
  required?: boolean;
  className?: string;
  placeholder: string;
}

export default Input;