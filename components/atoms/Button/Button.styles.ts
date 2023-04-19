import styled, { css } from "styled-components";
import { lighten } from "polished";
import { keyframes } from "styled-components";
import { easeOutQuart } from "../../../theme/easings";
import { Icon } from "@iconify/react";

const rippleAnimation = keyframes`
  0% {
    opacity: 0.6;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

export const StyledWrapper = styled.button<{ $disabled: boolean }>`
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

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      cursor: default;
    `};

  @media (max-width: 720px) {
    font-size: 1.6rem;
  }
`;

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0) translate(-50%, -50%);
  }
  
  100% {
    transform: rotate(360deg) translate(-50%, -50%);
  }
`;

export const StyledInnerWrapper = styled.div<{ $isDisable: boolean }>`
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

  ${({ $isDisable }) =>
    $isDisable &&
    css`
      opacity: 0;
      transform: scale(0.6);
      pointer-events: none;
    `}
`;

export const StyledIcon = styled(Icon)`
  stroke: #fff !important;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: block;
  transform-origin: top left;
  font-size: 2.4rem;
  animation: 1s ${loadingAnimation} linear infinite;
`;

export const StyledAfterLoading = styled.span<{
  $isShow: boolean;
}>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  pointer-events: none;
  transition: transform 0.2s ${easeOutQuart}, opacity 0.2s ${easeOutQuart};
  
  ${({ $isShow }) =>
    $isShow &&
    css`
      transform: translate(-50%, -50%);
      opacity: 1;
    `}}
`;

export const StyledAfterLoadingIcon = styled(Icon)`
  margin-right: 10px;
`;

export const StyledAfterLoadingMessage = styled.span``;
