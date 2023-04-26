import React, { Dispatch, FC, SetStateAction } from "react";
import { Icon } from "@iconify/react";
import {
  StyledWrapper,
  StyledButton,
  StyledQuestionWrapper,
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
      open={isActive}
    >
      <StyledQuestionWrapper ref={questionHeadline}>
        <StyledQuestion onClick={handleClick}>{question}</StyledQuestion>
        <StyledButton onClick={handleClick}>
          <Icon icon={isActive ? minimizeIcon : maximizeIcon} />
        </StyledButton>
      </StyledQuestionWrapper>
      <StyledAnswer ref={p}>{HtmlParser(answer)}</StyledAnswer>
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
