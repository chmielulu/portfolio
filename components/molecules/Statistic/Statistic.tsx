import React, { FC } from "react";
import {
  StyledWrapper,
  StyledImage,
  StyledItem,
  StyledHeadline,
  StyledContent,
} from "./Statistic.styles";
import { STATISTIC } from "../../../config/statistic";

const Statistic: FC<Props> = () => (
  <StyledWrapper>
    {STATISTIC.map(({ name, content, image }) => (
      <StyledItem key={name}>
        <StyledImage src={image} alt="" aria-hidden="true" width={200} />
        <StyledHeadline>{name}</StyledHeadline>
        <StyledContent>{content}</StyledContent>
      </StyledItem>
    ))}
  </StyledWrapper>
);

interface Props {}

export default Statistic;
