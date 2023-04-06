import React, { FC } from "react";
import {
  StyledWrapper,
  MadeWithLove,
  SourceCode,
  CompanyInfo,
  MiddleWrapper,
  InnerWrapper,
} from "./Footer.styles";

const Footer: FC<Props> = () => (
  <StyledWrapper>
    <InnerWrapper>
      <CompanyInfo>
        Usługi Programistyczne - Jakub Chmielewski <br />
        NIP: 5981654607 <br />
        ul. Rzepińska 5A/3 69-110 Kowalów
      </CompanyInfo>
      <MiddleWrapper>
        <MadeWithLove>Made with 💖 from 🇵🇱</MadeWithLove>
        <SourceCode>
          You can see the source code of this page{" "}
          <a href="#" target="_blank" rel="noreferrer noopener">
            here
          </a>{" "}
          🥰
        </SourceCode>
      </MiddleWrapper>
    </InnerWrapper>
  </StyledWrapper>
);

interface Props {}

export default Footer;
