import React, { FC } from "react";
import {
  StyledWrapper,
  StyledImagesWrapper,
  StyledParagraph,
} from "./AboutMe.styles";
import SectionHeadline from "../../atoms/SectionHeadline/SectionHeadline";
import firstImage from "../../../assets/images/about_me_1.png";
import secondImage from "../../../assets/images/about_me_2.png";
import Image from "next/image";

const AboutMe: FC<Props> = () => (
  <StyledWrapper>
    <SectionHeadline headline="Kim jestem?" subHeadline="O mnie" />
    <StyledImagesWrapper>
      <Image src={firstImage} alt="" />
      <Image src={secondImage} alt="" />
    </StyledImagesWrapper>
    <StyledParagraph>
      Hi! I’m <b>Jakub Chmielewski</b>, a <b>Full-Stack Developer</b> working at{" "}
      <b>RendPro</b>. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Etiam porta magna in commodo hendrerit. Sed volutpat purus ut dui
      porttitor mollis. Phasellus iaculis, sem id auctor sodales, est lacus
      semper nunc, sed fermentum lacus elit at arcu. Proin egestas efficitur
      nisi, eget facilisis ante varius sed. Donec velit risus, euismod sed lorem
      vel, volutpat tincidunt metus. Pellentesque purus nisi, pretium ut finibus
      id, feugiat non justo. Sed id luctus turpis. Nunc sodales tristique
      convallis.
    </StyledParagraph>
  </StyledWrapper>
);

interface Props {}

export default AboutMe;
