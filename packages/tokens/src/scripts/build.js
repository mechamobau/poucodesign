/* eslint-disable */
const StyleDictionaryPackage = require('style-dictionary');

const remDivisor = 16;

const formats = {
  colors: {
    name: 'javascript/colors',
    formatter(dictionary) {
      return `
  export const colors = {
  ${dictionary.allTokens
    .map((prop) => `  ${prop.name}: '${prop.value}',`)
    .join('\n')}
  };`;
    },
  },
  shadows: {
    name: 'javascript/shadows',
    formatter(dictionary) {
      return `
  export const shadows = {
  ${dictionary.allTokens
    .map(
      (prop) =>
        `  ${prop.name}: '${prop.value.x} ${prop.value.y} ${prop.value.blur} ${prop.value.spread} ${prop.value.color}',`
    )
    .join('\n')}
  };
  `;
    },
  },
  fonts: {
    name: 'javascript/fonts',
    formatter(dictionary) {
      return `
  export const fonts = {
  ${dictionary.allTokens
    .map((prop) => `  ${prop.name}: '${prop.value}',`)
    .join('\n')}
  };
  `;
    },
  },
  radius: {
    name: 'javascript/radius',
    formatter(dictionary) {
      return `
  export const radii = {
  ${dictionary.allTokens
    .map((prop) => `  ${prop.name}: '${prop.value}',`)
    .join('\n')}
  };
  `;
    },
  },
  borderWidths: {
    name: 'javascript/border-widths',
    formatter(dictionary) {
      return `
export const borderWidths = {
${dictionary.allTokens
  .map((prop) => `  ${prop.name}: '${prop.value}',`)
  .join('\n')}
};
  `;
    },
  },
  spaces: {
    name: 'javascript/spaces',
    formatter(dictionary) {
      const pxToRem = (pxValue) => {
        const rawValue = pxValue.replace('px', '');
        const remValue = rawValue / remDivisor;
        return `${remValue}rem`;
      };

      return `
  export const space = {
  ${dictionary.allTokens
    .map((prop) => `  ${prop.name}: '${pxToRem(prop.value)}',`)
    .join('\n')}
  };
  `;
    },
  },
  lineHeights: {
    name: 'javascript/line-heights',
    formatter(dictionary) {
      return `
  export const lineHeights = {
  ${dictionary.allTokens
    .map((prop) => `  ${prop.name}: '${prop.value}',`)
    .join('\n')}
  };
  `;
    },
  },
  fontSizes: {
    name: 'javascript/font-sizes',
    formatter(dictionary) {
      return `
export const fontSizes = {
${dictionary.allTokens
  .map((prop) => `  ${prop.name}: '${prop.value}',`)
  .join('\n')}
};
  `;
    },
  },
  fontWeights: {
    name: 'javascript/font-weights',
    formatter(dictionary) {
      return `
export const fontWeights = {
${dictionary.allTokens
  .map(
    (prop) =>
      `  ${prop.value === 'regular' ? `${prop.path[0]}Normal` : prop.name}: '${
        prop.value === 'regular' ? 'normal' : prop.value
      }',`
  )
  .join('\n')}
};
  `;
    },
  },
  opacity: {
    name: 'javascript/opacity',
    formatter(dictionary) {
      return `
  export const opacity = {
  ${dictionary.allTokens
    .map((prop) => `  ${prop.name}: '${prop.value}',`)
    .join('\n')}
  };
  `;
    },
  },
};

const filters = {
  isColor: {
    name: 'isColor',
    matcher(token) {
      return token.type === 'color';
    },
  },

  isShadow: {
    name: 'isShadow',
    matcher(token) {
      return token.type === 'boxShadow';
    },
  },

  isFont: {
    name: 'isFont',
    matcher(token) {
      return token.type === 'fontFamilies';
    },
  },

  isRadius: {
    name: 'isRadius',
    matcher(token) {
      return token.type === 'borderRadius';
    },
  },

  isBorderWidth: {
    name: 'isBorderWidth',
    matcher(token) {
      return token.type === 'borderWidth';
    },
  },

  isSpace: {
    name: 'isSpace',
    matcher(token) {
      return token.type === 'spacing';
    },
  },

  isLineHeight: {
    name: 'isLineHeight',
    matcher(token) {
      return token.type === 'lineHeights';
    },
  },

  isFontSize: {
    name: 'isFontSize',
    matcher(token) {
      return token.type === 'fontSizes';
    },
  },

  isFontWeight: {
    name: 'isFontWeight',
    matcher(token) {
      return token.type === 'fontWeights';
    },
  },

  isOpacity: {
    name: 'isOpacity',
    matcher(token) {
      return token.type === 'opacity';
    },
  },
};

Object.entries(formats).forEach(([, format]) =>
  StyleDictionaryPackage.registerFormat(format)
);

StyleDictionaryPackage.registerTransform({
  name: 'sizes/px',
  type: 'value',
  matcher(prop) {
    return [
      'fontSize',
      'spacing',
      'borderRadius',
      'borderWidth',
      'sizing',
    ].includes(prop.attributes.category);
  },
  transformer(prop) {
    return `${parseFloat(prop.original.value)}px`;
  },
});

StyleDictionaryPackage.registerTransformGroup({
  name: 'tokens-js',
  transforms: ['name/cti/camel', 'size/px', 'color/hex'],
});

Object.entries(filters).forEach(([, filter]) =>
  StyleDictionaryPackage.registerFilter(filter)
);

function getStyleDictionaryConfig() {
  return {
    source: [`src/tokens.globals.json`],
    platforms: {
      'web/js': {
        transformGroup: 'tokens-js',
        files: [
          {
            destination: 'src/constants/colors.ts',
            format: 'javascript/colors',
            filter: 'isColor',
          },
          {
            destination: 'src/constants/shadows.ts',
            format: 'javascript/shadows',
            filter: 'isShadow',
          },
          {
            destination: 'src/constants/fonts.ts',
            format: 'javascript/fonts',
            filter: 'isFont',
          },
          {
            destination: 'src/constants/radius.ts',
            format: 'javascript/radius',
            filter: 'isRadius',
          },
          {
            destination: 'src/constants/borderWidths.ts',
            format: 'javascript/border-widths',
            filter: 'isBorderWidth',
          },
          {
            destination: 'src/constants/space.ts',
            format: 'javascript/spaces',
            filter: 'isSpace',
          },
          {
            destination: 'src/constants/lineHeights.ts',
            format: 'javascript/line-heights',
            filter: 'isLineHeight',
          },
          {
            destination: 'src/constants/fontSizes.ts',
            format: 'javascript/font-sizes',
            filter: 'isFontSize',
          },
          {
            destination: 'src/constants/fontWeights.ts',
            format: 'javascript/font-weights',
            filter: 'isFontWeight',
          },
          {
            destination: 'src/constants/opacity.ts',
            format: 'javascript/opacity',
            filter: 'isOpacity',
          },
        ],
      },
    },
  };
}

console.log('Build started...');

console.log('\n==============================================');
console.log(`\nProcessing: Globals`);

const StyleDictionary = StyleDictionaryPackage.extend(
  getStyleDictionaryConfig()
);

StyleDictionary.buildPlatform('web/js');

console.log('\nEnd processing');

console.log('\n==============================================');
console.log('\nBuild completed!');