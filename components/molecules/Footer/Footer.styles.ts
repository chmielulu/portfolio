import styled from "styled-components";
import { lighten } from "polished";

export const StyledWrapper = styled.footer`
  margin-top: 110px;
  background: ${({ theme }) => theme.backgroundDarker};
  display: flex;
  justify-content: center;

  @media (max-width: 720px) {
    margin-top: 60px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  position: relative;
  padding: 35px 0;

  @media (max-width: 1180px) {
    flex-direction: column-reverse;
  }
`;

export const MiddleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1180px) {
    position: static;
    transform: none;
    margin-bottom: 25px;
  }
`;

export const MadeWithLove = styled.div`
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 10px;
`;

export const SourceCode = styled.div`
  a {
    font-weight: 700;
    color: ${({ theme }) => lighten(0.2, theme.primary)};

    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1024px) {
    text-align: center;
    margin-top: 10px;
  }
`;

export const CompanyInfo = styled.div`
  font-size: 1.2rem;
  font-family: "Lato", "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: 1180px) {
    text-align: center;
  }
`;
