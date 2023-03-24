import React, { FC } from "react";
import {
  StyledWrapper,
  StyledSubHeadline,
  StyledHeadline,
} from "./SectionHeadline.styles";

const SectionHeadline: FC<Props> = ({ headline, subHeadline, className }) => (
  <StyledWrapper className={className}>
    <StyledHeadline>{headline}</StyledHeadline>
    <StyledSubHeadline>{subHeadline}</StyledSubHeadline>
  </StyledWrapper>
);

interface Props {
  headline: string;
  subHeadline: string;
  className?: string;
}

export default SectionHeadline;
