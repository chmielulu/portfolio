import styled from "styled-components";
import SectionHeadline from "../../atoms/SectionHeadline/SectionHeadline";

export const StyledWrapper = styled.section``;

export const StyledSectionHeadline = styled(SectionHeadline)`
  margin-top: 160px;
  margin-bottom: 80px;

  @media (min-width: 1025px) {
    display: none;
  }
`;
