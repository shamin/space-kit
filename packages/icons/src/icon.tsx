/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors } from '@space-kit/core';

interface IconProps {
  paths: string[];
  name: string;
  size: 16 | 20;
  color: string;
}

export const Icon: React.FC<IconProps> = ({
  paths,
  name,
  size,
  color = colors.black,
}: IconProps) => {
  return (
    <svg style={{ fill: color }} width={size} height={size} data-icon={name}>
      {paths.map((d, i) => (
        <path key={i} d={d} fillRule="evenodd" />
      ))}
    </svg>
  );
};
