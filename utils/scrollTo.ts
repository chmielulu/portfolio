import ASScroll from "@ashthornton/asscroll";

export const scrollTo = (
  scroll: ASScroll | null,
  target: string,
  offset?: number
) => {
  if (target === "top") {
    scroll?.scrollTo(0);
    return;
  } else if (target === "bottom") {
    scroll?.scrollTo(document.body.scrollHeight);
    return;
  }

  const el = document.querySelector(target);

  if (!el) return;

  const rect = el.getBoundingClientRect();
  const top =
    rect.top + (scroll?.currentPos || document.documentElement.scrollTop);

  scroll?.scrollTo(top + (offset || 0));
};
