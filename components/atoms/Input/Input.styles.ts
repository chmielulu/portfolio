import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: block;
  position: relative;
  height: 36px;
`;

export const StyledInput = styled.input<{ $isError?: boolean }>`
  padding: 20px 6px;
  width: 100%;
  height: 100%;
  border: 0;
  border-bottom: 1px solid ${({theme}) => theme.washDarker};
  outline: none;
  font-size: 1.6rem;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  background: transparent;
  color: ${({theme}) => theme.foreground};
  font-weight: 600;
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
`;