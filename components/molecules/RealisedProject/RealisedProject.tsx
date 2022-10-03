import React, {
  FC,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  StyledWrapper,
  StyledLeftWrapper,
  StyledParagraph,
  StyledProperty,
  StyledPropertyIcon,
  StyledName,
  StyledCanvas,
} from "./RealisedProject.styles";
import dynamic from "next/dynamic";

const Monitor = dynamic(() => import("./Monitor/Monitor"), { suspense: true });

const RealisedProject: FC<Props> = ({
  name,
  description,
  properties,
  texture,
}) => {
  const [isHovering, setHovering] = useState<boolean>(false);
  const [isNameHovering, setNameHovering] = useState<boolean>(false);
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const onMouseEnter: MouseEventHandler<HTMLDivElement> = ({
    clientX,
    clientY,
    currentTarget,
  }) => {
    setHovering(true);

    const rect = currentTarget.getBoundingClientRect();
    setCoords({
      x: clientX - rect.left - rect.width / 2,
      y: clientY - rect.top - rect.height / 2,
    });
  };

  const onMouseLeave: MouseEventHandler = (e) => {
    setHovering(false);
  };

  const onMouseMove: MouseEventHandler = ({
    clientX,
    clientY,
    currentTarget,
  }) => {
    const rect = currentTarget.getBoundingClientRect();
    setCoords({
      x: clientX - rect.left - rect.width / 2,
      y: clientY - rect.top - rect.height / 2,
    });
  };

  return (
    <StyledWrapper data-scroll-section>
      <StyledLeftWrapper>
        <StyledName
          onMouseEnter={() => setNameHovering(true)}
          onMouseLeave={() => setNameHovering(false)}
        >
          {name}
        </StyledName>
        <StyledParagraph>{description}</StyledParagraph>
        {properties.map(({ name, icon }) => (
          <StyledProperty key={name}>
            <StyledPropertyIcon src={icon} alt={name} /> {name}
          </StyledProperty>
        ))}
      </StyledLeftWrapper>
      <StyledCanvas
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        <Monitor
          texture={texture}
          isHovering={isHovering}
          isNameHovering={isNameHovering}
          coords={coords}
        />
      </StyledCanvas>
    </StyledWrapper>
  );
};

interface Props {
  name: string;
  description: string;
  properties: { icon: string; name: string }[];
  texture: string;
}

export default RealisedProject;
