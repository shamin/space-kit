import { colors } from '@space-kit/core';

interface Theme {
  colors: {
    primary: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primary: colors.blue800,
  },
};
