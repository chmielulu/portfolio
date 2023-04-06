import styled from "styled-components";
import { rgba } from "polished";
import { easeOutQuart } from "../../../theme/easings";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import FileAttachment from "../../atoms/FileAttachment/FIleAttachment";

export const StyledWrapper = styled.section`
  max-width: 1155px;
  margin: auto;
  width: 90%;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1180px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledLeftWrapper = styled.div`
  flex: 1;
`;

export const StyledRightWrapper = styled.div`
  width: 616px;
  border-radius: 34px;
  padding: 56px;
  background: ${({ theme }) => rgba(theme.backgroundBlurred, 0.6)};
  backdrop-filter: blur(36px);
  margin-left: 40px;

  @media (max-width: 1180px) {
    margin-left: 0;
  }

  @media (max-width: 720px) {
    width: 95%;
    padding: 30px;
    max-width: 500px;
  }
`;

export const StyledRadiosWrapper = styled.fieldset`
  padding: 0;
  border: 0;
  display: flex;
  flex-direction: column;
`;

export const StyledGroupName = styled.label`
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 30px;

  @media (max-width: 720px) {
    margin: 0 0 20px;
  }
`;

export const StyledRadiosInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 720px) {
    gap: 8px;
  }
`;

export const StyledRadio = styled.label`
  position: relative;
`;

export const StyledRadioInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  :checked {
    cursor: default;
  }
`;

export const StyledRadioName = styled.div`
  padding: 10px 20px;
  background: #32004f;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 0.25s ${easeOutQuart};

  ${StyledRadioInput}:checked ~ & {
    background: ${({ theme }) => theme.primary};
  }
`;

export const StyledHeadline = styled.h3`
  font-size: 5.4rem;
  font-weight: 800;
  max-width: 440px;
  margin: 0 0 90px;
  line-height: 1.4;

  @media (max-width: 1180px) {
    display: none;
  }
`;

export const StyledContactItemsWrapper = styled.div`
  @media (max-width: 1180px) {
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 720px) {
    margin-bottom: 50px;
  }
`;

export const StyledContactItem = styled.div`
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  font-weight: 600;

  svg {
    font-size: 2.4rem;
    margin: 0 20px 0 0;
  }
`;

export const StyledInput = styled(Input)`
  :first-of-type {
    margin-top: 55px;
  }

  margin-top: 35px;

  @media (max-width: 720px) {
    :first-of-type {
      margin-top: 40px;
    }

    margin-top: 25px;
  }
`;

export const StyledTextarea = styled(Input).attrs(() => ({
  forwardedAs: "textarea",
}))`
  height: 100px;
  margin-top: 35px;

  textarea {
    resize: none;
  }

  span {
    top: 20px !important;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 35px;
`;

export const StyledFileAttachment = styled(FileAttachment)`
  margin-top: 35px;
`;

export const StyledInfo = styled.span`
  display: block;
  color: ${({ theme }) => theme.washLight};
  font-size: 1.4rem;
  margin-top: 5px;
`;
