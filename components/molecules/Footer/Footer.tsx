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
        ul. Edmunda Potrzebowskiego 1/4 70-237 Szczecin
      </CompanyInfo>
      <MiddleWrapper>
        <MadeWithLove>Made with 💖 from 🇵🇱</MadeWithLove>
        <SourceCode>
          Możesz zobaczyć kod źródłowy tej strony{" "}
          <a
            href="https://github.com/chmielulu/portfolio"
            target="_blank"
            rel="noreferrer noopener"
          >
            tutaj
          </a>{" "}
          🥰
        </SourceCode>
      </MiddleWrapper>
    </InnerWrapper>
  </StyledWrapper>
);

interface Props {}

export default Footer;
