import * as utils from './utils';

interface Palette {
  white: string;
  black: string;
  grey100: string;
  grey200: string;
}

const palette: Palette = {
  white: '#FFFFFF',
  black: '#000000',
  grey100: '#F6F6F6',
  grey200: '#EEEEEE',
};

interface FontSizes {
  xxxLarge: string;
  xxLarge: string;
  xLarge: string;
  large: string;
  medium: string;
  base: string;
  small: string;
  xSmall: string;
  xxSmall: string;
}

interface FontWeights {
  bold: number;
  semibold: number;
  medium: number;
  normal: number;
}

interface Spacing {
  xxSmall: string;
  xSmall: string;
  small: string;
  base: string;
  large: string;
  xLarge: string;
  xxLarge: string;
  xxxLarge: string;
}

interface Base {
  fontSize: string;
  fontFamily: string;
  fontFamilyAlt: string;
  radius: string;
  transitionSpeed: string;
}

interface Grid {
  maxWidth: string;
  gutter: string;
}

interface Easing {
  enter: string;
  exit: string;
  move: string;
}

interface Layers {
  modal: number;
  header: number;
}

interface Components {
  sectionWidthSmall: string;
  sectionWidthMedium: string;
  sideBarWidth: string;
}

interface Breakpoints {
  small: string;
  medium: string;
  large: string;
}

interface Colors extends Palette {
  textColor: string;
  backgroundColor: string;
}

interface MainTheme {
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  spacing: Spacing;
  base: Base;
  grid: Grid;
  easing: Easing;
  layers: Layers;
  components: Components;
  breakpoints: Breakpoints;
}

export interface Theme extends MainTheme {
  colors: Colors;
}

const main: MainTheme = {
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

export const darkTheme: Theme = {
  ...main,
  colors: {
    textColor: palette.white,
    backgroundColor: palette.black,
    ...palette,
  },
};

export const lightTheme: Theme = {
  ...main,
  colors: {
    textColor: palette.black,
    backgroundColor: palette.grey100,
    ...palette,
  },
};