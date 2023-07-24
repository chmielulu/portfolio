import styled, { css } from "styled-components";

export const StyledWrapper = styled.label<{ $isError?: boolean }>`
  display: block;
  position: relative;
  height: 36px;

  ${({ $isError }) =>
    $isError &&
    css`
      margin-bottom: 50px;
    `}
`;

export const StyledInput = styled.input<{ $isError?: boolean }>`
  padding: 20px 6px;
  width: 100%;
  height: 100%;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.washDarker};
  outline: none;
  font-size: 1.6rem;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  background: transparent;
  color: ${({ theme }) => theme.foreground};
  font-weight: 600;

  ${({ $isError }) =>
    $isError &&
    css`
      color: red;
      border-bottom: 1px solid red;
    `}
`;

export const StyledText = styled.span<{ $isError?: boolean }>`
  position: absolute;
  font-size: 1.6rem;
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.2s ease-out, color 0.2s ease-out;
  pointer-events: none;
  font-weight: 800;

  ${StyledInput}:focus ~ &, ${StyledInput}:not(:placeholder-shown) ~ & {
    transform: scale(0.8) translateY(-220%);
    transform-origin: left top;
  }

  ${({ $isError }) =>
    $isError &&
    css`
      color: red;
    `}
`;

export const StyledErrorMessage = styled.span`
  color: red;
  margin-top: 10px;
  display: block;
  font-size: 1.4rem;
`;
