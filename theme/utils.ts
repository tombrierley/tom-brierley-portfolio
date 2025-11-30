import { css } from 'styled-components';

export const stripUnits = (stringWithUnits: string): number => parseInt(stringWithUnits, 10);

export const toRems = (pixelFontSize: string): string => `${stripUnits(pixelFontSize) / 16}rem`;

export const visuallyHidden = `
  border: 0 !important;
  clip: rect(1px 1px 1px 1px);
  /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px !important;
  overflow: hidden;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
`;

export const hideText = `
  text-indent: -9999px;
  white-space: nowrap;
`;

export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const placeholder = (...args: Parameters<typeof css>) => css`
  &::-webkit-input-placeholder {
    /* WebKit browsers */
    ${css(...args)};
  }

  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    ${css(...args)};
  }

  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    ${css(...args)};
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    ${css(...args)};
  }
`;

export const calculateGridPercentage = (cols: number = 1, totalCols: number): string => {
  const colFraction = cols / totalCols;
  return `${colFraction * 100}%`;
};

export const addPxValues = (value1: string, value2: string): string => `${parseInt(value1.replace('px', ''), 10)
    + parseInt(value2.replace('px', ''), 10)}px`;