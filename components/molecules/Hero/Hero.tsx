import React, { FC, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import {
  StyledWrapper,
  StyledImageWrapper,
  StyledLeftWrapper,
  StyledSubHeadline,
  StyledHeadline,
  StyledParagraph,
  StyledScrollBottom,
} from "./Hero.styles";
import imgSrc from "../../../assets/images/me.png";
import Image from "next/image";
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { arrowBottomIcon } from "../../../assets/icons";

const Hero: FC<Props> = () => {
  const { scroll } = useLocomotiveScroll();
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
          Lorem ipsum <span>dolor</span> site amet
        </StyledHeadline>
        <StyledSubHeadline>Jakub Chmielewski</StyledSubHeadline>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean enim
          purus, suscipit sit amet enim sed, eleifend placerat metus. In
          accumsan id velit ut iaculis. Pellentesque non justo a nunc
          sollicitudin porta.
        </StyledParagraph>
      </StyledLeftWrapper>
      <StyledImageWrapper>
        <Image src={imgSrc} layout="fill" objectFit="contain" />
      </StyledImageWrapper>

      <StyledScrollBottom
        onClick={() =>
          scroll.scrollTo(document.querySelector("#about-me"), { offset: -200 })
        }
      >
        SCROLL{" "}
        <div ref={scrollBottom}>
          <Icon icon={arrowBottomIcon} />
        </div>
      </StyledScrollBottom>
    </StyledWrapper>
  );
};

interface Props {}

export default Hero;
