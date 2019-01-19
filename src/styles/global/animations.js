// Import Dependencies
import { keyframes } from 'styled-components';

// Import Globals
import * as vars from './vars';
import { hexToRgba } from './utils';

export const placeholderShimmer = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

export const spin = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const autoFill = keyframes`
  to {
    background: transparent;
    color: ${vars.colors.white};
  }
`;
