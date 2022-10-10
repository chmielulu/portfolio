import React, { FC, useState } from "react";
import { StyledWrapper, StyledQuestionsWrapper } from "./Faq.styles";
import SectionHeadline from "../../atoms/SectionHeadline/SectionHeadline";
import { FAQ } from "../../../config/faq";
import Item from "./Item/Item";

const Faq: FC<Props> = () => {
  const [currentActive, setCurrentActive] = useState<number>(-1);

  return (
    <StyledWrapper id="faq">
      <SectionHeadline
        headline="Najczęściej zadawane pytania"
        subHeadline="FAQ"
      />

      <StyledQuestionsWrapper>
        {FAQ.map(({ question, answer }, index) => (
          <Item
            index={index}
            currentActive={currentActive}
            setCurrentActive={setCurrentActive}
            question={question}
            answer={answer}
            key={index}
          />
        ))}
      </StyledQuestionsWrapper>
    </StyledWrapper>
  );
};

interface Props {}

export default Faq;
