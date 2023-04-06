import styled, { css } from "styled-components";
import { easeOutQuart } from "../../../../theme/easings";

export const StyledWrapper = styled.div<{
  $isActive: boolean;
  $pHeight: number;
}>`
  padding: 30px 50px 30px 0;
  border-bottom: 2px solid #505050;
  position: relative;
  overflow: hidden;
  transition: max-height 0.5s ${easeOutQuart};
  max-height: 85px;

  ${({ $isActive, $pHeight }) =>
    $isActive &&
    css`
      max-height: calc(85px + ${$pHeight + 20}px);
    `};
`;

export const StyledQuestion = styled.h3`
  font-size: 2.4rem;
  font-weight: 800;
  margin: 0 0 20px;
  cursor: pointer;
  max-width: 900px;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 720px) {
    font-size: 1.8rem;
  }
`;

export const StyledAnswer = styled.p`
  margin: 0;
  max-width: 900px;
`;

export const StyledButton = styled.button`
  background: transparent;
  color: #fff;
  border: 0;
  position: absolute;
  right: 0;
  top: 20px;
  transform: translateY(25%);
  font-size: 2.8rem;
  cursor: pointer;

  @media (max-width: 720px) {
    font-size: 2.2rem;
  }
`;
