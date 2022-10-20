import React, {ChangeEventHandler, FC, useState} from 'react';
import { StyledWrapper, StyledIcon, StyledText, StyledInput } from './FileAttachment.styles';
import icon from '@iconify/icons-typcn/attachment-outline'

const FileAttachment: FC<Props> = ({className}) => {
  const [file, setFile] = useState<string>("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({target}) => {
    setFile((target?.files?.[0]?.name) || "");
  }

  return (
    <StyledWrapper className={className}>
      <StyledIcon icon={icon}/>
      <StyledText>{file ? file : "Załącz plik"}</StyledText>
      <StyledInput type="file" accept="image/png, image/gif, image/jpeg, image/webp" onChange={handleInputChange} />
    </StyledWrapper>
  );
}

interface Props {
  className?: string;
}

export default FileAttachment;