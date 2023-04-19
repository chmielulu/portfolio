import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useMainContext } from "../../../../context";

export const useItem = (
  index: number,
  currentActive: number,
  setCurrentActive: Dispatch<SetStateAction<number>>
) => {
  const { scroll } = useMainContext();
  const questionHeadline = useRef<HTMLHeadingElement>(null);
  const [pHeight, setPHeight] = useState<number>(0);
  const [iHeight, setIHeight] = useState<number>(0);
  const p = useRef<HTMLParagraphElement>(null);
  const isActive = index === currentActive;

  const handleClick = () => {
    if (index === currentActive) {
      setCurrentActive(-1);
    } else {
      setCurrentActive(index);
    }

    setTimeout(() => {
      scroll?.resize();
    }, 600);
  };

  useEffect(() => {
    if (!questionHeadline.current || !p.current) return;

    const getIAndPHeight = () => {
      const rects = questionHeadline.current?.getBoundingClientRect();
      setIHeight(rects?.height || 0);
      setPHeight(p.current?.getBoundingClientRect().height || 0);
    };

    getIAndPHeight();

    window.addEventListener("resize", getIAndPHeight);

    return () => {
      window.removeEventListener("resize", getIAndPHeight);
    };
  }, []);

  return {
    isActive,
    pHeight,
    iHeight,
    handleClick,
    questionHeadline,
    p,
  };
};
