import styled from "styled-components";
import { rgba } from "polished";
import { easeOutQuart } from "../../../theme/easings";
import { Canvas } from "@react-three/fiber";

export const StyledWrapper = styled.article`
  width: 90%;
  max-width: 1385px;
  margin: 0 auto 80px;
  padding: 90px 30px 90px 90px;
  border-radius: 60px;
  background: ${({ theme }) => rgba(theme.backgroundBlurred, 0.6)};
  backdrop-filter: blur(36px);
  display: flex;
  height: 800px;
  position: relative;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: unset;
    max-width: 720px;
    padding: 70px;
  }

  @media (max-width: 720px) {
    padding: 20px;
    border-radius: 20px;
    margin: 0 auto 30px auto;
    max-width: 600px;
  }
`;

export const StyledLeftWrapper = styled.div`
  margin-right: 40px;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    margin-right: 0;
    width: 100%;
  }
`;

export const StyledName = styled.h3`
  max-width: 400px;
  font-size: 4.8rem;
  line-height: 1.3;
  font-weight: 800;
  margin: 0 0 30px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    max-width: unset;
    margin-top: 40px;
  }

  @media (max-width: 720px) {
    font-size: 2.4rem;
    margin-bottom: 20px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 2rem;
  line-height: 2;
  font-weight: 500;
  max-width: 420px;

  @media (max-width: 1024px) {
    max-width: unset;
  }

  @media (max-width: 720px) {
    font-size: 1.6rem;
  }
`;

export const StyledProperty = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 10px;

  :last-of-type {
    margin: 0;
  }

  @media (max-width: 720px) {
    font-size: 1.6rem;
  }
`;

export const StyledPropertyIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;

  @media (max-width: 720px) {
    width: 50px;
    height: 50px;
  }
`;

export const StyledCanvasWrapper = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  pointer-events: none;
`;

export const StyledRightFiller = styled.div`
  flex: 1;
  aspect-ratio: 800 / 630;
  z-index: 3;

  img {
    width: 100%;
    height: auto;
  }

  * {
    border-radius: 20px;
  }

  @media (min-width: 1025px) {
    * {
      display: none !important;
    }
  }

  @media (max-width: 1024px) {
    aspect-ratio: unset;
  }
`;

export const StyledCanvas = styled(Canvas)`
  pointer-events: none !important;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.5s ${easeOutQuart};
  border-radius: 60px;

  @media (max-width: 1260px) and (min-width: 1025px) {
    ${StyledRightFiller}:hover + & {
      opacity: 1;
    }
  }
`;
