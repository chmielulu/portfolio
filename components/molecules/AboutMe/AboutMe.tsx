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
  <StyledWrapper data-scroll-section id="about-me">
    <SectionHeadline headline="Kim jestem?" subHeadline="O mnie" />
    <StyledImagesWrapper>
      <Image src={firstImage} alt="" />
      <Image src={secondImage} alt="" />
    </StyledImagesWrapper>
    <StyledParagraph>
      Cześć, nazywam się <b>Jakub Chmielewski</b> i jestem{" "}
      <b>specjalistą od Frontendu</b> (choć potrafię też pisać back-end,
      aplikacje desktopowe i na telefony 😅). Obecnie pracuję w{" "}
      <b>RendPro Limited jako Lead Front-End Developer</b>, a dodatkowo
      przyjmuję zlecenia jako Freelancer. Z komputerami jestem związany od
      dziecka, a w branży IT pracuję od 4 lat. Przez ten czas stworzyłem wiele
      projektów i pomogłem wielu firmom zaistnieć w internecie. Programuję
      głównie w <b>TypeScript i JavaScript</b>, choć znam też Go, Rust, C++ i
      podstawy Asemblera x86. Oczywiście potrafię też HTML i CSS, ale tego nie
      można zaliczyć do programowania 😃. Jeśli potrzebujesz strony
      internetowej, sklepu internetowego, bloga, projektu graficznego,
      oprogramowania dla swojej firmy lub aplikacji na telefon to trafiłeś
      idealnie! <b>W mgnieniu oka zaspokoję Twoje potrzeby!</b>
    </StyledParagraph>
  </StyledWrapper>
);

interface Props {}

export default AboutMe;
