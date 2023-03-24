import React, { Dispatch, FC, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import {
  StyledWrapper,
  StyledButton,
  StyledQuestion,
  StyledAnswer,
} from "./Item.styles";
import maximizeIcon from "@iconify/icons-akar-icons/circle-plus";
import minimizeIcon from "@iconify/icons-akar-icons/circle-minus";
import { useMainContext } from "../../../../context";

const Item: FC<Props> = ({
  index,
  currentActive,
  setCurrentActive,
  question,
  answer,
}) => {
  const { scroll } = useMainContext();
  const questionHeadline = useRef<HTMLHeadingElement>(null);
  const [pHeight, setPHeight] = useState<number>(0);
  const [iHeight, setIHeight] = useState<number>(0);
  const p = useRef<HTMLParagraphElement>(null);
  const isActive = index === currentActive;

  useEffect(() => {
    if (!p.current) return;

    setPHeight(p.current.getBoundingClientRect().height);
  }, [p]);

  const handleClick = () => {
    if (index === currentActive) {
      setCurrentActive(-1);
    } else {
      setCurrentActive(index);
    }

    setTimeout(() => {
      scroll?.resize();
    }, 600);
  };

  useEffect(() => {
    if (!questionHeadline.current) return;

    const getIHeight = () => {
      const rects = questionHeadline.current?.getBoundingClientRect();
      setIHeight(rects?.height || 0);
    };

    getIHeight();

    window.addEventListener("resize", getIHeight);

    return () => {
      window.removeEventListener("resize", getIHeight);
    };
  }, []);

  return (
    <StyledWrapper
      $isActive={isActive}
      $pHeight={pHeight}
      style={{ minHeight: `${iHeight + 60}px` }}
    >
      <StyledQuestion onClick={handleClick} ref={questionHeadline}>
        {question}
      </StyledQuestion>
      <StyledAnswer ref={p}>{answer}</StyledAnswer>
      <StyledButton onClick={handleClick}>
        <Icon icon={isActive ? minimizeIcon : maximizeIcon} />
      </StyledButton>
    </StyledWrapper>
  );
};

interface Props {
  index: number;
  currentActive: number;
  setCurrentActive: Dispatch<number>;
  question: string;
  answer: string;
}

export default Item;
