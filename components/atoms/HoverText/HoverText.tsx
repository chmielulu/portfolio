import { FC, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useTheme } from "styled-components";

export const HoverText: FC<Props> = ({ children }) => {
  const firstText = useRef<HTMLSpanElement>(null);
  const secondText = useRef<HTMLSpanElement>(null);
  const { primary } = useTheme();

  const [isHovering, setHovering] = useState<boolean>(false);

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  const mappedText = (
    <>
      {[...children].map((char, index) => (
        <span key={index} style={{ display: "inline-block" }}>
          {char === " " ? <>&nbsp;</> : char}
        </span>
      ))}
    </>
  );

  useEffect(() => {
    if (!firstText.current || !secondText.current) {
      return;
    }

    const tl = gsap.timeline({
      defaults: {
        duration: 0.3,
      },
    });

    const firstTextLetters = firstText.current.querySelectorAll("span");
    const secondTextLetters = secondText.current.querySelectorAll("span");

    if (isHovering) {
      tl.to(
        firstTextLetters,
        {
          y: "-100%",
          stagger: {
            each: 0.025,
          },
        },
        "a"
      ).to(
        secondTextLetters,
        {
          y: "-100%",
          stagger: {
            each: 0.025,
          },
        },
        "a"
      );
    } else {
      tl.to(
        firstTextLetters,
        {
          y: 0,
          stagger: {
            each: 0.025,
          },
        },
        "b"
      ).to(
        secondTextLetters,
        {
          y: 0,
          stagger: {
            each: 0.025,
          },
        },
        "b"
      );
    }
  }, [firstText, secondText, isHovering]);

  return (
    <span
      style={{ position: "relative", overflow: "hidden", display: "block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={firstText}>{mappedText}</span>
      <span
        ref={secondText}
        aria-hidden="true"
        style={{ position: "absolute", left: "0", top: "100%", color: primary }}
      >
        {mappedText}
      </span>
    </span>
  );
};

interface Props {
  children: string;
}
