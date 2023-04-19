import React, { FC, useRef, useState } from "react";
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledList,
  StyledItem,
  StyledRightWrapper,
  StyledButton,
  StyledRightInnerWrapper,
} from "./Navigation.styles";
import { Spin as Hamburger } from "hamburger-react";
import { Logo } from "../../atoms/Logo/Logo";
import { NAVIGATION_LIST } from "../../../config/navigation";
import { HoverText } from "../../atoms/HoverText/HoverText";
import Link from "next/link";
import { useMainContext } from "../../../context";
import { scrollTo } from "../../../utils/scrollTo";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

const Navigation: FC<Props> = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const list = useRef(null);
  const { scroll, scrollY } = useMainContext();
  const isSticky = scrollY > 300;

  useOnClickOutside(list, (e) => {
    if (
      (e.target as HTMLDivElement)?.classList.contains("hamburger-react") ||
      !!(e.target as HTMLDivElement)?.closest(".hamburger-react")
    )
      return;

    setOpen(false);
  });

  return (
    <StyledWrapper $isSticky={isSticky}>
      <StyledInnerWrapper>
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(scroll, "top");
          }}
        >
          <Logo />
        </Link>

        <StyledRightWrapper $isOpen={isOpen}>
          <StyledRightInnerWrapper $isOpen={isOpen} ref={list}>
            <StyledList>
              {NAVIGATION_LIST.map(({ name, target, offset }) => (
                <StyledItem
                  key={name}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(scroll, target, offset || -200);
                    setOpen(false);
                  }}
                >
                  <a href={target}>
                    <HoverText>{name}</HoverText>
                  </a>
                </StyledItem>
              ))}
            </StyledList>
            <StyledButton
              onClick={(e) => {
                e.preventDefault();
                scrollTo(scroll, "#contact", -200);
                setOpen(false);
              }}
            >
              Kontakt
            </StyledButton>
          </StyledRightInnerWrapper>
        </StyledRightWrapper>

        <Hamburger toggled={isOpen} toggle={setOpen} size={28} />
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

interface Props {}

export default Navigation;
