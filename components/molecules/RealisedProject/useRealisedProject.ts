import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { useGsap } from "../../../hooks/useGsap";
import { Coords } from "../../../interfaces/Coords";

export const useRealisedProject = (
  showCursor: boolean,
  onMouseRightEnter: () => void
) => {
  const [isHovering, setHovering] = useState<boolean>(false);
  const [isNameHovering, setNameHovering] = useState<boolean>(false);
  const [coords, setCoords] = useState<Coords>({
    x: 0,
    y: 0,
  });
  const { gsap } = useGsap();

  const wrapper = useRef<HTMLDivElement>(null);

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
    if (!showCursor || !wrapper.current || window.innerWidth < 1025) {
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

  return {
    wrapper,
    isNameHovering,
    setNameHovering,
    isHovering,
    coords,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
  };
};
