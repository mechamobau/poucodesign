import { createStitches, defaultThemeMap } from '@stitches/react';
import { globalTokens, breakpoints } from 'tokens';
export const { styled, css, createTheme, keyframes } = createStitches({
    media: breakpoints,
    theme: globalTokens,
    themeMap: Object.assign(Object.assign({}, defaultThemeMap), { font: 'typographies' }),
});
