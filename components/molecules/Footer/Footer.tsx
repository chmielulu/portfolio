import React, { FC } from "react";
import { StyledWrapper, MadeWithLove, SourceCode } from "./Footer.styles";

const Footer: FC<Props> = () => (
  <StyledWrapper>
    <MadeWithLove>Made with 💖 from 🇵🇱</MadeWithLove>
    <SourceCode>
      You can see the source code of this page{" "}
      <a href="#" target="_blank" rel="noreferrer noopener">
        here
      </a>{" "}
      🥰
    </SourceCode>
  </StyledWrapper>
);

interface Props {}

export default Footer;
