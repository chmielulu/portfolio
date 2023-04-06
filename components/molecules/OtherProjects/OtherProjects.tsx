import React, { FC } from "react";
import {
  StyledWrapper,
  StyledOtherProject,
  StyledOtherProjectWrapper,
  StyledSectionHeadline,
} from "./OtherProjects.styles";
import otherProjectImageSrc1 from "../../../assets/images/other-project-1.png";
import otherProjectImageSrc2 from "../../../assets/images/other-project-2.png";
import otherProjectImageSrc3 from "../../../assets/images/other-project-3.png";
import otherProjectImageSrc4 from "../../../assets/images/other-project-4.png";
import otherProjectImageSrc5 from "../../../assets/images/other-project-5.png";
import otherProjectImageSrc6 from "../../../assets/images/other-project-6.png";

const OtherProjects: FC<Props> = () => {
  const images = [
    otherProjectImageSrc1,
    otherProjectImageSrc2,
    otherProjectImageSrc3,
    otherProjectImageSrc4,
    otherProjectImageSrc5,
    otherProjectImageSrc6,
  ];

  return (
    <StyledWrapper>
      <StyledSectionHeadline headline="Inne projekty" subHeadline="Portfolio" />
      {images.map((imageSrc, index) => (
        <StyledOtherProjectWrapper key={index}>
          <StyledOtherProject src={imageSrc} alt="" />
        </StyledOtherProjectWrapper>
      ))}
    </StyledWrapper>
  );
};

interface Props {}

export default OtherProjects;
