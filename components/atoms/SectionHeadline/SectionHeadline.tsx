import React, { FC } from "react";
import {
  StyledWrapper,
  StyledSubHeadline,
  StyledHeadline,
} from "./SectionHeadline.styles";

const SectionHeadline: FC<Props> = ({ headline, subHeadline }) => (
  <StyledWrapper>
    <StyledHeadline>{headline}</StyledHeadline>
    <StyledSubHeadline>{subHeadline}</StyledSubHeadline>
  </StyledWrapper>
);

interface Props {
  headline: string;
  subHeadline: string;
}

export default SectionHeadline;
