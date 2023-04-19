import React, { FC } from "react";
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledIcon,
  StyledAfterLoading,
  StyledAfterLoadingIcon,
  StyledAfterLoadingMessage,
} from "./Button.styles";
import { useButtonEffects } from "../../../hooks/useButtonEffects";
import { useWindowSize } from "react-use";
import loadingIcon from "@iconify/icons-icon-park-outline/loading-four";

const Button: FC<Props> = ({
  children,
  className,
  isLoading,
  onClick,
  afterLoadingIcon,
  afterLoadingMessage,
  displayAfterLoading,
  ...props
}) => {
  const { width } = useWindowSize();
  const { onMouseDown } = useButtonEffects({ width });

  return (
    <StyledWrapper
      onMouseDown={(e) => {
        if (displayAfterLoading) {
          e.preventDefault();
          return;
        }
        onMouseDown(e);
      }}
      onClick={(e) => {
        if (displayAfterLoading) {
          e.preventDefault();
          return;
        }
        onClick?.(e);
      }}
      className={className}
      $disabled={!!isLoading || !!displayAfterLoading}
      {...props}
    >
      <StyledInnerWrapper $isDisable={!!isLoading || !!displayAfterLoading}>
        {children}
      </StyledInnerWrapper>
      {isLoading && <StyledIcon icon={loadingIcon} />}
      <StyledAfterLoading aria-hidden="true" $isShow={!!displayAfterLoading}>
        <StyledAfterLoadingIcon icon={afterLoadingIcon} />
        <StyledAfterLoadingMessage>
          {afterLoadingMessage}
        </StyledAfterLoadingMessage>
      </StyledAfterLoading>
    </StyledWrapper>
  );
};

interface Props {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  displayAfterLoading?: boolean;
  isLoading?: boolean;
  afterLoadingIcon?: any;
  afterLoadingMessage?: string;
  type?: "button" | "submit";
}

export default Button;
