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
import Link from "next/link";
import { useMainContext } from "../../../context";
import { scrollTo } from "../../../utils/scrollTo";

const Navigation: FC<Props> = () => {
  const { scroll, scrollY } = useMainContext();

  const isSticky = scrollY > 300;

  return (
    <StyledWrapper $isSticky={isSticky}>
      <StyledInnerWrapper>
        <Link href="/">
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollTo(scroll, "top");
            }}
          >
            <Logo />
          </a>
        </Link>

        <StyledRightWrapper>
          <StyledList>
            {NAVIGATION_LIST.map(({ name, target, offset }) => (
              <StyledItem
                key={name}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(scroll, target, offset || -200);
                }}
              >
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
};

interface Props {}

export default Navigation;
