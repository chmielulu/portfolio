import React, { FC } from "react";
import {
  StyledWrapper,
  StyledLeftWrapper,
  StyledParagraph,
  StyledProperty,
  StyledPropertyIcon,
  StyledName,
  StyledCanvasWrapper,
  StyledBackground,
  StyledCanvas,
  StyledRightFiller,
} from "./RealisedProject.styles";
import dynamic from "next/dynamic";
import Image from "../../atoms/Image/Image";
import { useRealisedProject } from "./useRealisedProject";
import { StaticImageData } from "next/image";

const Monitor = dynamic(() => import("./Monitor/Monitor"));

const RealisedProject: FC<Props> = ({
  name,
  description,
  properties,
  texture,
  mobileImage,
  showCursor,
  link,
  onMouseEnter: onMouseRightEnter,
}) => {
  const {
    coords,
    isHovering,
    isNameHovering,
    setNameHovering,
    onMouseEnter,
    onMouseMove,
    wrapper,
    onMouseLeave,
  } = useRealisedProject(!!showCursor, onMouseRightEnter);

  return (
    <StyledWrapper data-scroll-section ref={wrapper}>
      {showCursor && (
        <img
          src="/cursor.svg"
          alt=""
          aria-hidden="true"
          id="cursor"
          style={{
            opacity: 0,
            position: "absolute",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      )}
      <StyledLeftWrapper>
        <StyledName
          onMouseEnter={() => setNameHovering(true)}
          onMouseLeave={() => setNameHovering(false)}
        >
          <a href={link} rel="noreferrer noopener" target="_blank">
            {name}
          </a>
        </StyledName>
        <StyledParagraph>{description}</StyledParagraph>
        {properties.map(({ name, icon }) => (
          <StyledProperty key={name}>
            <StyledPropertyIcon src={icon} alt={name} width={60} /> {name}
          </StyledProperty>
        ))}
      </StyledLeftWrapper>

      <StyledCanvasWrapper>
        <StyledCanvas style={{ aspectRatio: "1385 / 800", overflow: "hidden" }}>
          <Monitor
            texture={texture}
            isHovering={isHovering}
            isNameHovering={isNameHovering}
            coords={coords}
          />
        </StyledCanvas>
      </StyledCanvasWrapper>

      <StyledRightFiller
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        <Image src={mobileImage} placeholder="blur" quality={80} alt={name} />
      </StyledRightFiller>
      <StyledBackground />
    </StyledWrapper>
  );
};

interface Props {
  name: string;
  link: string;
  description: string;
  properties: { icon: StaticImageData; name: string }[];
  texture: string;
  showCursor?: boolean;
  onMouseEnter: () => void;
  mobileImage: StaticImageData;
}

export default RealisedProject;
