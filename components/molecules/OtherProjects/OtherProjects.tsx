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

const images = [
  {
    src: otherProjectImageSrc1,
    href: "https://bgkinvestment.pl",
    alt: "BGK Investment",
  },
  {
    src: otherProjectImageSrc2,
    href: "https://palacowapark.pl",
    alt: "Pałacowa Park",
  },
  {
    src: otherProjectImageSrc3,
    href: "https://mdwgroup.pl",
    alt: "MDW Group",
  },
  {
    src: otherProjectImageSrc4,
    href: "https://osiedlepodmiastem.pl",
    alt: "Osiedle Pod Miastem",
  },
  {
    src: otherProjectImageSrc5,
    href: "https://nowa-farma.pl",
    alt: "Nowa Farma",
  },
  {
    src: otherProjectImageSrc6,
    href: "https://olenkipark.pl",
    alt: "Oleńki Park",
  },
];

const OtherProjects: FC<Props> = () => (
  <StyledWrapper>
    <StyledSectionHeadline headline="Inne projekty" subHeadline="Portfolio" />
    {images.map((image, index) => (
      <StyledOtherProjectWrapper key={index}>
        <a href={image.href} rel="noreferrer noopener" target="_blank">
          <StyledOtherProject
            src={image.src}
            quality={80}
            placeholder="blur"
            alt={image.alt}
          />
        </a>
      </StyledOtherProjectWrapper>
    ))}
  </StyledWrapper>
);

interface Props {}

export default OtherProjects;
