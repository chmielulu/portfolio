import styled from "styled-components";
import Image from "next/image";
import { easeOutQuart } from "../../../theme/easings";

export const StyledWrapper = styled.section`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
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
`;
