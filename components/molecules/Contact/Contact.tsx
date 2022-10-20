import React, { FC } from "react";
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledRightWrapper,
  StyledLeftWrapper,
  StyledHeadline,
  StyledContactItem,
  StyledContactItemsWrapper,
  StyledRadiosWrapper,
  StyledGroupName,
  StyledRadio,
  StyledRadioInput,
  StyledRadiosInnerWrapper,
  StyledRadioName,
  StyledInput,
  StyledTextarea,
  StyledButton,
  StyledFileAttachment,
  StyledInfo
} from "./Contact.styles";
import SectionHeadline from "../../atoms/SectionHeadline/SectionHeadline";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-akar-icons/github-fill";
import phoneIcon from "@iconify/icons-el/phone-alt";
import mailIcon from "@iconify/icons-fluent/mail-28-filled";

const Contact: FC<Props> = () => (
  <StyledWrapper id="contact">
    <SectionHeadline headline="Get in touch ✋🏻" subHeadline="Kontakt" />

    <StyledInnerWrapper>
      <StyledLeftWrapper>
        <StyledHeadline>
          Have a project? <br />I would love to help! ❤️
        </StyledHeadline>
        <StyledContactItemsWrapper>
          <StyledContactItem>
            <Icon icon={githubIcon} /> @chmielulu
          </StyledContactItem>
          <StyledContactItem>
            <Icon icon={phoneIcon} /> +48 123 456 789
          </StyledContactItem>
          <StyledContactItem>
            <Icon icon={mailIcon} /> contact@jacobprogrammer.dev
          </StyledContactItem>
        </StyledContactItemsWrapper>
      </StyledLeftWrapper>

      <StyledRightWrapper>
        <form>
          <StyledRadiosWrapper>
            <StyledGroupName>Jestem zainteresowany...</StyledGroupName>

            <StyledRadiosInnerWrapper>
              <StyledRadio>
                <StyledRadioInput
                  type="radio"
                  name="subject"
                  value="website"
                  defaultChecked
                />
                <StyledRadioName>Strona internetowa</StyledRadioName>
              </StyledRadio>
              <StyledRadio>
                <StyledRadioInput
                  type="radio"
                  name="subject"
                  value="ecommerce"
                />
                <StyledRadioName>Sklep internetowy</StyledRadioName>
              </StyledRadio>
              <StyledRadio>
                <StyledRadioInput type="radio" name="subject" value="blog" />
                <StyledRadioName>Blog</StyledRadioName>
              </StyledRadio>
              <StyledRadio>
                <StyledRadioInput
                  type="radio"
                  name="subject"
                  value="webdesign"
                />
                <StyledRadioName>Projekt graficzny</StyledRadioName>
              </StyledRadio>
              <StyledRadio>
                <StyledRadioInput
                  type="radio"
                  name="subject"
                  value="business-software"
                />
                <StyledRadioName>Oprogramowanie dla firm</StyledRadioName>
              </StyledRadio>
              <StyledRadio>
                <StyledRadioInput
                  type="radio"
                  name="subject"
                  value="phone-app"
                />
                <StyledRadioName>Aplikacje na telefon</StyledRadioName>
              </StyledRadio>
              <StyledRadio>
                <StyledRadioInput type="radio" name="subject" value="other" />
                <StyledRadioName>Inne</StyledRadioName>
              </StyledRadio>
            </StyledRadiosInnerWrapper>
          </StyledRadiosWrapper>

          <StyledInput placeholder="Imię i nazwisko" />
          <StyledInput placeholder="E-mail" />
          <StyledTextarea placeholder="Wiadomość" />
          <StyledFileAttachment />
          <StyledInfo>Dozwolone pliki: .png, .jpg, .webp, .gif</StyledInfo>
          <StyledButton>Wyślij formularz</StyledButton>
        </form>
      </StyledRightWrapper>
    </StyledInnerWrapper>
  </StyledWrapper>
);

interface Props {}

export default Contact;
