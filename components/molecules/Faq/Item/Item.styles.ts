import styled, { css } from "styled-components";
import { easeOutQuart } from "../../../../theme/easings";

export const StyledWrapper = styled.details<{
  $isActive: boolean;
  $pHeight: number;
  $iHeight: number;
}>`
  padding: 30px 0;
  border-bottom: 2px solid #505050;
  position: relative;
  overflow: hidden;
  transition: height 0.5s ${easeOutQuart};
  height: ${({ $iHeight }) => `${$iHeight + 60}px`};

  ${({ $isActive, $pHeight, $iHeight }) =>
    $isActive &&
    css`
      height: ${80 + $iHeight + $pHeight}px;
    `};
`;

export const StyledQuestionWrapper = styled.summary`
  cursor: pointer;
  max-width: 900px;
  padding-right: 50px;
  list-style: none;
`;

export const StyledQuestion = styled.h4`
  font-size: 2.4rem;
  font-weight: 800;
  margin: 0 0 20px;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 720px) {
    font-size: 1.8rem;
  }
`;

export const StyledAnswer = styled.p`
  margin: 0;

  @media (max-width: 1024px) {
    text-align: justify;
  }
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
