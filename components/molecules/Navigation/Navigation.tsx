import React, { FC } from "react";
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledList,
  StyledItem,
  StyledRightWrapper,
} from "./Navigation.styles";
import { Logo } from "../../atoms/Logo/Logo";
import Button from "../../atoms/Button/Button";
import { NAVIGATION_LIST } from "../../../config/navigation";
import { HoverText } from "../../atoms/HoverText/HoverText";

const Navigation: FC<Props> = () => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <Logo />

      <StyledRightWrapper>
        <StyledList>
          {NAVIGATION_LIST.map(({ name, target }) => (
            <StyledItem key={name}>
              <a href={target}>
                <HoverText>{name}</HoverText>
              </a>
            </StyledItem>
          ))}
        </StyledList>
        <Button>Kontakt</Button>
      </StyledRightWrapper>
    </StyledInnerWrapper>
  </StyledWrapper>
);

interface Props {}

export default Navigation;
