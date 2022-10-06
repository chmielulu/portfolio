import React, { FC } from "react";
import {
  StyledWrapper,
  StyledDescription,
  StyledRightWrapper,
  StyledPricing,
  StyledHeadline,
  StyledImage,
} from "./Service.styles";

const Service: FC<Props> = ({ content, pricing, image, name }) => (
  <StyledWrapper>
    <StyledImage src={image} alt="" />
    <StyledRightWrapper>
      <StyledHeadline>{name}</StyledHeadline>
      <StyledDescription>{content}</StyledDescription>
      <StyledPricing>{pricing}</StyledPricing>
    </StyledRightWrapper>
  </StyledWrapper>
);

interface Props {
  name: string;
  content: string;
  pricing: string;
  image: string;
}

export default Service;
