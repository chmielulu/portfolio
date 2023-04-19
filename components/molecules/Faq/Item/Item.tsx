import React, { Dispatch, FC, SetStateAction } from "react";
import { Icon } from "@iconify/react";
import {
  StyledWrapper,
  StyledButton,
  StyledQuestion,
  StyledAnswer,
} from "./Item.styles";
import maximizeIcon from "@iconify/icons-akar-icons/circle-plus";
import minimizeIcon from "@iconify/icons-akar-icons/circle-minus";
import HtmlParser from "react-html-parser";
import { useItem } from "./useItem";

const Item: FC<Props> = ({
  index,
  currentActive,
  setCurrentActive,
  question,
  answer,
}) => {
  const { isActive, pHeight, iHeight, p, handleClick, questionHeadline } =
    useItem(index, currentActive, setCurrentActive);

  return (
    <StyledWrapper
      $isActive={isActive}
      $pHeight={pHeight}
      $iHeight={iHeight}
      style={{ minHeight: `${iHeight + 40}px` }}
    >
      <StyledQuestion onClick={handleClick} ref={questionHeadline}>
        {question}
      </StyledQuestion>
      <StyledAnswer ref={p}>{HtmlParser(answer)}</StyledAnswer>
      <StyledButton onClick={handleClick}>
        <Icon icon={isActive ? minimizeIcon : maximizeIcon} />
      </StyledButton>
    </StyledWrapper>
  );
};

interface Props {
  index: number;
  currentActive: number;
  setCurrentActive: Dispatch<SetStateAction<number>>;
  question: string;
  answer: string;
}

export default Item;
