import styled, { css } from "styled-components";
import { rgba } from "polished";
import { easeOutQuart } from "../../../theme/easings";
import Button from "../../atoms/Button/Button";

export const StyledWrapper = styled.nav<{ $isSticky: boolean }>`
  position: fixed;
  width: 96%;
  top: 26px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => rgba(theme.backgroundBlurred, 0.6)};
  backdrop-filter: blur(36px);
  border: ${({ theme }) => `1px solid ${theme.washDarker}`};
  border-radius: 20px;
  padding: 16px 16px 16px 48px;
  height: 70px;
  max-width: 1440px;
  z-index: 999999999;
  transition: transform 0.5s ${easeOutQuart}, width 0.5s ${easeOutQuart},
    border-radius 0.5s ${easeOutQuart}, border-color 0.5s ${easeOutQuart};

  @media (min-width: 1025px) {
    ${({ $isSticky }) =>
      $isSticky &&
      css`
        transform: translate(-50%, -26px);
        width: 100%;
        border-radius: 0;
        border-color: transparent;
      `}

    .hamburger-react {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    transform: translate(-50%, -26px);
    width: 100%;
    border-radius: 0;
    border-color: transparent;
  }

  @media (max-width: 720px) {
    height: 60px;
    padding: unset;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  max-width: 1380px;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 720px) {
    width: 90%;
  }
`;

export const StyledRightWrapper = styled.div<{ $isOpen: boolean }>`
  @media (max-width: 1024px) {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: calc(100vh - 70px);
    background: ${({ theme }) => theme.backgroundBlurred};
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ${easeOutQuart};
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        opacity: 1;
        pointer-events: all;
      `};
  }
`;

export const StyledRightInnerWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    transform: translateY(30%) scale(0.8);
    opacity: 0;
    transition: transform 0.5s ${easeOutQuart}, opacity 0.5s ${easeOutQuart};
    z-index: -1;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        transform: translateY(0);
        opacity: 1;
      `};
  }
`;

export const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0 40px 0 0;
  padding: 0;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    gap: 0;
  }
`;

export const StyledItem = styled.li`
  font-size: 1.8rem;
  font-weight: 700;
  margin-right: 25px;
  transition: transform 0.25s ${easeOutQuart};

  :last-of-type {
    margin-right: 0;
  }

  :hover {
    transform: scale(0.95);
  }

  @media (max-width: 1024px) {
    margin-right: 0;
    font-size: 2.4rem;

    a {
      padding: 20px 0;
      display: block;
    }

    :hover {
      transform: none;
    }
  }
`;

export const StyledButton = styled(Button)`
  @media (max-width: 1024px) {
    background: transparent;
    font-size: 2.4rem;
    padding: 20px 0;

    span {
      display: none;
    }

    :hover {
      background: transparent;
    }

    :active {
      transform: none;
    }
  }
`;
