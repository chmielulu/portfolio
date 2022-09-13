import { StyledWrapper } from "./Logo.styles";
import { FC } from "react";

export const Logo: FC = ({ ...props }) => (
  <StyledWrapper {...props}>
    jakub<span>programista</span>.dev
  </StyledWrapper>
);
