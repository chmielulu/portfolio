import React, { FC } from "react";
import { StyledWrapper } from "./Button.styles";
import { useButtonEffects } from "../../../hooks/useButtonEffects";
import { useWindowSize } from "react-use";

const Button: FC<Props> = ({ children,className, onClick }) => {
  const { width } = useWindowSize();
  const { onMouseDown } = useButtonEffects({ width });

  return (
    <StyledWrapper onMouseDown={onMouseDown} onClick={onClick} className={className}>
      {children}
    </StyledWrapper>
  );
};

interface Props {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default Button;
