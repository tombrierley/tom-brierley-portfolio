/**
 * Global variables
 *
 * Usage:
 * import * as vars from '../global/vars'
 * ...
 * border-radius: ${vars.global.radius};
 *
 */

import { css } from 'styled-components';
import * as utils from './utils';

// Colors
export const colors = {
  white: '#ffffff',
  black: '#000000',
  grey100: '#e7e7e7',
  grey800: '#141414',
};

export const baseFontColor = colors.grey800;
export const baseFontSize = '16px';
export const baseFontFamily = 'Catamaran, sans-serif';

export const spacing = {
  xxSmall: '5px',
  xSmall: '10px',
  small: '15px',
  base: '20px',
  medium: '30px',
  midLarge: '50x',
  large: '100px',
};

export const fontFamilies = {
  heading: 'Catamaran, sans-serif',
};

export const grid = {
  columns: 12,
  gutter: '10px',
  gutterValue: 10,
};

export const fontSize = {
  xxxxxxxLarge: utils.toRems('64px'),
  xxxxxxLarge: utils.toRems('48px'),
  xxxxxLarge: utils.toRems('40px'),
  xxxxLarge: utils.toRems('36px'),
  xxxLarge: utils.toRems('32px'),
  xxLarge: utils.toRems('28px'),
  xlarge: utils.toRems('24px'),
  Large: utils.toRems('22px'),
  medium: utils.toRems('20px'),
  base: utils.toRems('16px'),
  small: utils.toRems('14px'),
  xsmall: utils.toRems('12px'),
  xxSmall: utils.toRems('10px'),
};

export const fontWeight = {
  bold: 700,
  semibold: 600,
  medium: 500,
  normal: 400,
};

export const easing = {
  enter: 'cubic-bezier(0, 0.5, 0.5, 1)',
  exit: 'cubic-bezier(0.5, 0, 0.5, 1)',
  move: 'cubic-bezier(0.5, 0, 0, 1)',
};

export const global = {
  radius: '4px',
  transitionSpeed: '300ms',
  easing: easing.move,
  shadow: '0 2px 5px 0 rgba(0,0,0,0.26)',
  tapHighlightColor: 'rgba(255, 255, 255, 0);',
};

export const layer = {
  tooltipOnTop: 10000,
  modal: 9000,
  nav: 8000,
  header: 7000,
  tooltip: 6000,
};

export const bp = {
  small: '600px',
  medium: '900px',
  large: '1200px',
  xLarge: '1400px',
  xxLarge: '1600px',
  xxxLarge: '2000px',
  xxxxLarge: '2300px',
};

export const component = {
  steppedFormWidth: '960px',
  onboardingWidth: '470px',
  onboardingHeaderHeight: '92px',
  headerHeight: '72px',
  headerHeightDesktop: '85px',
  buttonHeight: '50px',
};

export const componentHeight = {
  nav: {
    default: '62px',
    small: '62px',
    medium: '100%',
    large: '100%',
    xLarge: '100%',
    xxLarge: '100%',
    xxxLarge: '100%',
    xxxxLarge: '100%',
  },
  map: '530px',
  mapInfoBox: '261px',
};

export const breakpoint = {
  xsmall: (...args) => css`
    @media (max-width: ${bp.small}) {
      ${css(...args)};
    }
  `,
  small: (...args) => css`
    @media (min-width: ${bp.small}) {
      ${css(...args)};
    }
  `,
  medium: (...args) => css`
    @media (min-width: ${bp.medium}) {
      ${css(...args)};
    }
  `,
  large: (...args) => css`
    @media (min-width: ${bp.large}) {
      ${css(...args)};
    }
  `,
  xLarge: (...args) => css`
    @media (min-width: ${bp.xLarge}) {
      ${css(...args)};
    }
  `,
  xxLarge: (...args) => css`
    @media (min-width: ${bp.xxLarge}) {
      ${css(...args)};
    }
  `,
  xxxLarge: (...args) => css`
    @media (min-width: ${bp.xxxLarge}) {
      ${css(...args)};
    }
  `,
  xxxxLarge: (...args) => css`
    @media (min-width: ${bp.xxxxLarge}) {
      ${css(...args)};
    }
  `,
};
