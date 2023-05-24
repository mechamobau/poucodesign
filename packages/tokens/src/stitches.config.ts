import { createStitches, defaultThemeMap } from '@stitches/react';
import baseTokens from './baseTokens';
import breakPoints from './breakPoints';

export const { styled, css, createTheme, keyframes } = createStitches({
  media: breakPoints,
  theme: baseTokens,
  themeMap: {
    ...defaultThemeMap,
    font: 'typographies',
  },
});
