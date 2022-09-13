import React, { FC } from "react";
import { StyledWrapper } from "./Button.styles";
import { useButtonEffects } from "../../../hooks/useButtonEffects";
import { useWindowSize } from "react-use";

const Button: FC<Props> = ({ children }) => {
  const { width } = useWindowSize();
  const { onMouseDown } = useButtonEffects({ width });

  return <StyledWrapper onMouseDown={onMouseDown}>{children}</StyledWrapper>;
};

interface Props {
  children: string;
}

export default Button;
