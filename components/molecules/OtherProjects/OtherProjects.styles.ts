import styled from "styled-components";
import Image from "../../atoms/Image/Image";
import { easeOutQuart } from "../../../theme/easings";
import SectionHeadline from "../../atoms/SectionHeadline/SectionHeadline";

export const StyledWrapper = styled.section`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 720px;
  }

  @media (max-width: 720px) {
    gap: 20px;
    max-width: 600px;
  }
`;

export const StyledOtherProjectWrapper = styled.div`
  opacity: 0.8;
  transition: opacity 0.5s ${easeOutQuart}, transform 0.5s ${easeOutQuart};
  cursor: pointer;

  :hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

export const StyledOtherProject = styled(Image)`
  border-radius: 40px;
  transform: translateZ(0);
  overflow: hidden;

  @media (max-width: 720px) {
    border-radius: 20px;
  }
`;

export const StyledSectionHeadline = styled(SectionHeadline)`
  margin-top: 160px;
  margin-bottom: 80px;

  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 720px) {
    margin-top: 80px;
    margin-bottom: 40px;
  }
`;
