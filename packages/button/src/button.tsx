import React from 'react'
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FunctionComponent, ReactNode } from "react";

const buttonStyle = css`
  background: rebeccapurple;
`;

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => (
  <button css={buttonStyle} onClick={props.onClick}>
    {props.children}
  </button>
);
