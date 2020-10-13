/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const buttonStyle = css`
  background: rebeccapurple;
`;

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
  <button css={buttonStyle} onClick={props.onClick}>
    {props.children}
  </button>
);
