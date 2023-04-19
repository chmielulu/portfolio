import styled from "styled-components";
import { Icon } from "@iconify/react";

export const StyledWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const StyledIcon = styled(Icon)`
  font-size: 2.4rem;
`;

export const StyledInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -1;
`;

export const StyledText = styled.span`
  margin-left: 18px;
  font-weight: 800;
  word-break: break-word;

  ${StyledInput}:focus-visible + &::before {
    position: absolute;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 4px;
    z-index: -1;
    pointer-events: none;
    border: 1px dashed white;
    content: "";
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
