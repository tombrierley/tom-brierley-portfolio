import * as utils from './utils';

const palette = {
  white: '#FFFFFF',
  black: '#000000',
  grey100: '#F6F6F6',
  grey200: '#EEEEEE',
};

const main = {
  fontSizes: {
    xxxLarge: utils.toRems('36px'),
    xxLarge: utils.toRems('28px'),
    xLarge: utils.toRems('24px'),
    large: utils.toRems('20px'),
    medium: utils.toRems('18px'),
    base: utils.toRems('16px'),
    small: utils.toRems('14px'),
    xSmall: utils.toRems('12px'),
    xxSmall: utils.toRems('10px'),
  },

  fontWeights: {
    bold: 700,
    semibold: 600,
    medium: 500,
    normal: 400,
  },

  spacing: {
    xxSmall: '5px',
    xSmall: '10px',
    small: '15px',
    base: '20px',
    large: '30px',
    xLarge: '50px',
    xxLarge: '70px',
    xxxLarge: '140px',
  },

  base: {
    fontSize: '16px',
    fontFamily: "'Rubik', sans-serif",
    fontFamilyAlt: "'Lora', serif",
    radius: '2px',
    transitionSpeed: '400ms',
  },

  grid: {
    maxWidth: '1280px',
    gutter: '30px',
  },

  easing: {
    enter: 'cubic-bezier(0, 0.5, 0.5, 1)',
    exit: 'cubic-bezier(0.5, 0, 0.5, 1)',
    move: 'cubic-bezier(0.5, 0, 0, 1)',
  },

  layers: {
    modal: 9000,
    header: 8000,
  },

  components: {
    sectionWidthSmall: '640px',
    sectionWidthMedium: '720px',
    sideBarWidth: '80px',
  },

  breakpoints: {
    small: 'min-width: 600px',
    medium: 'min-width: 900px',
    large: 'min-width: 1200px',
  },
};

export const darkTheme = {
  ...main,
  colors: {
    textColor: palette.white,
    backgroundColor: palette.black,
    ...palette,
  },
};

export const lightTheme = {
  ...main,
  colors: {
    textColor: palette.black,
    backgroundColor: palette.grey100,
    ...palette,
  },
};
