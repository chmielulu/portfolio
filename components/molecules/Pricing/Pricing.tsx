import React, { FC } from "react";
import { StyledWrapper, StyledInnerWrapper } from "./Pricing.styles";
import SectionHeadline from "../../atoms/SectionHeadline/SectionHeadline";
import Service from "./Service/Service";
import { SERVICES } from "../../../config/services";

const Pricing: FC<Props> = () => (
  <StyledWrapper id="pricing">
    <SectionHeadline
      headline="Co mogę dla Ciebie zrobić?"
      subHeadline="Usługi i Cennik"
    />

    <StyledInnerWrapper>
      {SERVICES.map((props, index) => (
        <Service key={index} {...props} />
      ))}
    </StyledInnerWrapper>
  </StyledWrapper>
);

interface Props {}

export default Pricing;
