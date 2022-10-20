import styled from 'styled-components';
import {Icon} from "@iconify/react";

export const StyledWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const StyledIcon = styled(Icon)`
  font-size: 2.4rem;
`;

export const StyledText = styled.span`
  margin-left: 18px;
  font-weight: 800;
  word-break: break-word;
`;

export const StyledInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -1;
`;