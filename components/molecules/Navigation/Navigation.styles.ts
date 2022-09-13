import styled from "styled-components";
import { rgba } from "polished";
import { easeOutQuart } from "../../../theme/easings";

export const StyledWrapper = styled.nav`
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
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  max-width: 1380px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const StyledRightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0 40px 0 0;
  padding: 0;
  align-items: center;
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
`;
