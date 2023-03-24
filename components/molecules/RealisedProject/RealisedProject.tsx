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
import { useGsap } from "../../../hooks/useGsap";

const Monitor = dynamic(() => import("./Monitor/Monitor"), { suspense: true });

const RealisedProject: FC<Props> = ({
  name,
  description,
  properties,
  texture,
  showCursor,
  onMouseEnter: onMouseRightEnter,
}) => {
  const [isHovering, setHovering] = useState<boolean>(false);
  const [isNameHovering, setNameHovering] = useState<boolean>(false);
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [secondCoords, setSecondCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const { gsap } = useGsap();

  const wrapper = useRef<HTMLDivElement>(null);

  const onWrapperMouseMove: MouseEventHandler<HTMLDivElement> = ({
    currentTarget,
    clientX,
    clientY,
  }) => {
    const rect = currentTarget.getBoundingClientRect();

    setSecondCoords({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  const onMouseEnter: MouseEventHandler<HTMLDivElement> = ({
    clientX,
    clientY,
    currentTarget,
  }) => {
    setHovering(true);
    onMouseRightEnter();

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

  useEffect(() => {
    if (!showCursor || !wrapper.current) {
      return;
    }

    const cursor = wrapper.current.querySelector("#cursor");

    const tl = gsap.timeline({
      scrollTrigger: { trigger: wrapper.current, start: "top bottom" },
      repeat: -1,
      delay: 0.5,
    });

    tl.set(cursor, {
      opacity: 0,
      width: "42px",
      height: "42px",
      top: "15%",
      left: "50%",
      x: 0,
      y: 0,
    })
      .to(
        cursor,
        {
          opacity: 1,
          ease: "Expo.easeOut",
        },
        0
      )
      .to(
        cursor,
        {
          x: 200,
          y: 270,
          duration: 2,
          ease: "Expo.easeOut",
        },
        1
      )
      .to(cursor, {
        scale: 2,
      })
      .to(cursor, {
        scale: 1,
      })
      .to(cursor, {
        delay: 0.5,
        opacity: 0,
        ease: "Expo.easeOut",
      });
  }, [wrapper]);

  return (
    <StyledWrapper
      data-scroll-section
      ref={wrapper}
      onMouseMove={onWrapperMouseMove}
    >
      {showCursor && (
        <img
          src="cursor.svg"
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
  showCursor?: boolean;
  onMouseEnter: () => void;
}

export default RealisedProject;
