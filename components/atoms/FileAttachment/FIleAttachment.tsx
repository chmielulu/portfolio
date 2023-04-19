import React, { FC } from "react";
import {
  StyledWrapper,
  StyledIcon,
  StyledText,
  StyledInput,
} from "./FileAttachment.styles";
import icon from "@iconify/icons-typcn/attachment-outline";
import { UseFormRegister } from "react-hook-form";

const FileAttachment: FC<Props> = ({ className, name, register, file }) => {
  return (
    <StyledWrapper className={className}>
      <StyledIcon icon={icon} />
      <StyledInput
        type="file"
        accept="image/png, image/gif, image/jpeg, image/webp"
        {...register(name)}
      />
      <StyledText>{file ? file : "Załącz plik"}</StyledText>
    </StyledWrapper>
  );
};

interface Props {
  className?: string;
  name: string;
  register: UseFormRegister<any>;
  file?: string | null;
}

export default FileAttachment;
