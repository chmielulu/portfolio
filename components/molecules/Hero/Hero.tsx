import React, { FC, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import {
  StyledWrapper,
  StyledImage,
  StyledLeftWrapper,
  StyledSubHeadline,
  StyledHeadline,
  StyledParagraph,
  StyledScrollBottom,
} from "./Hero.styles";
import imgSrc from "../../../assets/images/me.png";
import { gsap } from "gsap";
import { arrowBottomIcon } from "../../../assets/icons";
import { scrollTo } from "../../../utils/scrollTo";
import { useMainContext } from "../../../context";

const Hero: FC<Props> = () => {
  const { scroll } = useMainContext();
  const scrollBottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollBottom.current) return;

    gsap.to(scrollBottom.current, {
      y: "5px",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "easeInOutQuart",
    });
  }, [scrollBottom]);

  return (
    <StyledWrapper data-scroll-section>
      <StyledLeftWrapper>
        <StyledHeadline>
          Pomagam zaistnieć w <span>internecie</span>.
        </StyledHeadline>
        <StyledSubHeadline>Jakub Chmielewski</StyledSubHeadline>
        <StyledParagraph>
          W mgnieniu oka zbuduję dla Ciebie idealną wizytówkę internetową,
          pozwolę zarabiać na Twoim sklepie internetowym, czy stworzę
          wyróżniającego się bloga.
        </StyledParagraph>
      </StyledLeftWrapper>
      <StyledImage
        src={imgSrc}
        placeholder="blur"
        quality={80}
        alt="Jakub Chmielewski"
      />

      <StyledScrollBottom onClick={() => scrollTo(scroll, "#about-me", -200)}>
        PRZEWIŃ{" "}
        <div ref={scrollBottom}>
          <Icon icon={arrowBottomIcon} />
        </div>
      </StyledScrollBottom>
    </StyledWrapper>
  );
};

interface Props {}

export default Hero;
