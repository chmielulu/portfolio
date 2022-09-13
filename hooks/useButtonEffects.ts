import { MouseEvent } from "react";

interface UseButtonEffectArguments {
  width: number;
  rippleWidth?: number;
  rippleWidthMobile?: number;
  mobileBreakpoint?: number;
  duration?: number;
}

interface DefaultButtonEffectsOptions {
  rippleWidth: number;
  rippleWidthMobile: number;
  mobileBreakpoint: number;
  duration: number;
}

const getDefaultArgs = (
  options?: UseButtonEffectArguments
): DefaultButtonEffectsOptions => ({
  rippleWidth: options?.rippleWidth || 260,
  rippleWidthMobile: options?.rippleWidthMobile || 160,
  mobileBreakpoint: options?.mobileBreakpoint || 1024,
  duration: options?.duration || 600,
});

export const useButtonEffects = ({
  width,
  ...args
}: UseButtonEffectArguments) => {
  const { rippleWidthMobile, mobileBreakpoint, duration, rippleWidth } =
    getDefaultArgs({ width, ...args });

  const onMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    const span = document.createElement("span");
    const rects = e.currentTarget.getBoundingClientRect();

    const halfRippleWidth =
      width <= mobileBreakpoint ? rippleWidthMobile / 2 : rippleWidth / 2;

    const left = e.clientX - rects.left - halfRippleWidth;
    const top = e.clientY - rects.top - halfRippleWidth;
    span.classList.add("ripple");

    span.style.left = `${left}px`;
    span.style.top = `${top}px`;

    e.currentTarget.appendChild(span);

    setTimeout(() => span.remove(), duration);
  };

  return { onMouseDown };
};
