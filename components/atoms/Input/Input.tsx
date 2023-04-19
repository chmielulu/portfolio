import React, { FC } from "react";
import {
  StyledWrapper,
  StyledInput,
  StyledText,
  StyledErrorMessage,
} from "./Input.styles";
import { UseFormRegister } from "react-hook-form";

const Input: FC<Props> = ({
  type,
  className,
  error,
  placeholder,
  register,
  name,
  required,
  ...props
}) => {
  return (
    <StyledWrapper className={className} $isError={!!error}>
      <StyledInput
        placeholder=" "
        $isError={!!error}
        {...register(name, { required })}
        {...props}
      />
      <StyledText $isError={!!error}>
        {required ? "*" : undefined}
        {placeholder}
      </StyledText>
      {error === "required" && (
        <StyledErrorMessage>To pole jest wymagane</StyledErrorMessage>
      )}
    </StyledWrapper>
  );
};

interface Props {
  type?: "text" | "password" | "email";
  error?: string;
  required?: boolean;
  className?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
}

export default Input;
