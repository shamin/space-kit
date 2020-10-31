/** @jsx jsx */
import { jsx } from '@emotion/core';

interface IconProps {
  paths: string[];
  name: string;
  size: number;
}

export const Icon: React.FC<IconProps> = ({ paths, name, size }: IconProps) => {
  return (
    <svg
      style={{ fill: 'rebeccapurple' }}
      width={size}
      height={size}
      data-icon={name}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} fillRule="evenodd" />
      ))}
    </svg>
  );
};
