import React, { FC } from "react";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-akar-icons/github-fill";
import phoneIcon from "@iconify/icons-el/phone-alt";
import mailIcon from "@iconify/icons-fluent/mail-28-filled";
import SectionHeadline from "../../atoms/SectionHeadline/SectionHeadline";
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
  StyledInfo,
  StyledFormError,
} from "./Contact.styles";
import checkIcon from "@iconify/icons-icon-park-outline/check-small";
import { useContact } from "./useContact";

const Contact: FC<Props> = () => {
  const {
    handleSubmit,
    isLoading,
    errorSend,
    register,
    isSent,
    errorState,
    file,
  } = useContact();

  return (
    <StyledWrapper id="contact">
      <SectionHeadline headline="Zbudujmy coś razem 🎉" subHeadline="Kontakt" />

      <StyledInnerWrapper>
        <StyledLeftWrapper>
          <StyledHeadline>
            Masz projekt? <br />
            Uwielbiam pomagać! ❤️
          </StyledHeadline>
          <StyledContactItemsWrapper>
            <StyledContactItem
              href="https://github.com/chmielulu"
              target="_blank"
              rel="noopener"
            >
              <Icon icon={githubIcon} /> @chmielulu
            </StyledContactItem>
            <StyledContactItem
              href="tel:+48887077904"
              target="_blank"
              rel="noopener"
            >
              <Icon icon={phoneIcon} /> +48 887 077 904
            </StyledContactItem>
            <StyledContactItem
              href="mailto:kontakt@jakubprogramista.pl"
              target="_blank"
              rel="noopener"
            >
              <Icon icon={mailIcon} /> kontakt@jakubprogramista.pl
            </StyledContactItem>
          </StyledContactItemsWrapper>
        </StyledLeftWrapper>

        <StyledRightWrapper>
          <form onSubmit={handleSubmit()}>
            <StyledRadiosWrapper>
              <StyledGroupName>Jestem zainteresowany...</StyledGroupName>

              <StyledRadiosInnerWrapper>
                <StyledRadio>
                  <StyledRadioInput
                    type="radio"
                    value="website"
                    defaultChecked
                    {...register("subject", { required: true })}
                  />
                  <StyledRadioName>Strona internetowa</StyledRadioName>
                </StyledRadio>
                <StyledRadio>
                  <StyledRadioInput
                    type="radio"
                    value="ecommerce"
                    {...register("subject", { required: true })}
                  />
                  <StyledRadioName>Sklep internetowy</StyledRadioName>
                </StyledRadio>
                <StyledRadio>
                  <StyledRadioInput
                    type="radio"
                    value="blog"
                    {...register("subject", { required: true })}
                  />
                  <StyledRadioName>Blog</StyledRadioName>
                </StyledRadio>
                <StyledRadio>
                  <StyledRadioInput
                    type="radio"
                    value="webdesign"
                    {...register("subject", { required: true })}
                  />
                  <StyledRadioName>Projekt graficzny</StyledRadioName>
                </StyledRadio>
                <StyledRadio>
                  <StyledRadioInput
                    type="radio"
                    value="business-software"
                    {...register("subject", { required: true })}
                  />
                  <StyledRadioName>Oprogramowanie dla firm</StyledRadioName>
                </StyledRadio>
                <StyledRadio>
                  <StyledRadioInput
                    type="radio"
                    value="phone-app"
                    {...register("subject", { required: true })}
                  />
                  <StyledRadioName>Aplikacje na telefon</StyledRadioName>
                </StyledRadio>
                <StyledRadio>
                  <StyledRadioInput
                    type="radio"
                    value="other"
                    {...register("subject", { required: true })}
                  />
                  <StyledRadioName>Inne</StyledRadioName>
                </StyledRadio>
              </StyledRadiosInnerWrapper>
            </StyledRadiosWrapper>

            <StyledInput
              placeholder="Imię i nazwisko"
              name="name"
              register={register}
              required
              error={errorState?.name?.type}
            />
            <StyledInput
              placeholder="E-mail"
              name="mail"
              register={register}
              required
              error={errorState?.mail?.type}
            />
            <StyledTextarea
              placeholder="Wiadomość"
              name="message"
              register={register}
              required
              error={errorState?.message?.type}
            />
            <StyledFileAttachment
              name="file"
              register={register}
              file={file ? file[0]?.name : null}
            />
            <StyledInfo>Dozwolone pliki: .png, .jpg, .webp, .gif</StyledInfo>
            <StyledButton
              isLoading={isLoading}
              displayAfterLoading={isSent}
              afterLoadingIcon={checkIcon}
              afterLoadingMessage="Wysłano"
              type="submit"
            >
              Wyślij formularz
            </StyledButton>
          </form>
          {errorSend !== null && <StyledFormError>{errorSend}</StyledFormError>}
        </StyledRightWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

interface Props {}

export default Contact;
