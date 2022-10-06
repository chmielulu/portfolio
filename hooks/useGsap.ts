import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMainContext } from "../context";

gsap.registerPlugin(ScrollTrigger);

export const useGsap = () => {
  const { scroll } = useMainContext();

  useEffect(() => {
    if (!scroll) return;

    gsap.ticker.add(scroll.update);
    ScrollTrigger.defaults({
      scroller: scroll.containerElement,
    });
    ScrollTrigger.scrollerProxy(scroll.containerElement, {
      scrollTop(value) {
        return arguments.length
          ? (scroll.currentPos = value as number)
          : scroll.currentPos;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });
  });

  return { gsap, scroll };
};
