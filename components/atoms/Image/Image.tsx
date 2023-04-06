import NextImage from "next/image";
import type { ImageProps } from "next/image";
import { useMainContext } from "../../../context";
import { FC } from "react";

const Image: FC<ImageProps> = (props) => {
  const { scroll } = useMainContext();

  return <NextImage {...props} onLoad={() => scroll?.resize()} />;
};

export default Image;
