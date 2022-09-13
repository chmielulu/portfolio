import React, { FC } from "react";
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
import { arrowBottomIcon } from "../../../assets/icons";

const Hero: FC<Props> = () => (
  <StyledWrapper>
    <StyledLeftWrapper>
      <StyledHeadline>
        Lorem ipsum <span>dolor</span> site amet
      </StyledHeadline>
      <StyledSubHeadline>Jakub Chmielewski</StyledSubHeadline>
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean enim
        purus, suscipit sit amet enim sed, eleifend placerat metus. In accumsan
        id velit ut iaculis. Pellentesque non justo a nunc sollicitudin porta.
      </StyledParagraph>
    </StyledLeftWrapper>
    <StyledImageWrapper>
      <Image src={imgSrc} layout="fill" objectFit="contain" />
    </StyledImageWrapper>

    <StyledScrollBottom>
      SCROLL <Icon icon={arrowBottomIcon} />
    </StyledScrollBottom>
  </StyledWrapper>
);

interface Props {}

export default Hero;
