import styled from "styled-components";
import { darken, lighten } from "polished";
import { keyframes } from "styled-components";
import { easeOutQuart } from "../../../theme/easings";

export const rippleAnimation = keyframes`
  0% {
    opacity: 0.6;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

export const StyledWrapper = styled.button`
  background: ${({ theme }) => theme.secondary};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 12px 22px;
  color: #fff;
  transition: background 0.25s ${easeOutQuart}, transform 0.25s ${easeOutQuart};
  position: relative;
  overflow: hidden;

  :hover,
  :active {
    background: ${({ theme }) => lighten(0.1, theme.secondary)};
  }

  :active {
    transform: scale(0.95);
  }

  .ripple {
    width: 260px;
    height: 260px;
    position: absolute;
    background: ${({ theme }) => lighten(0.6, theme.background)};
    z-index: -1;
    border-radius: 50%;
    transform: scale(0);
    pointer-events: none;
    opacity: 0;
    animation: ${rippleAnimation} 0.6s ease-out;
    transform-origin: center center;
  }
`;
