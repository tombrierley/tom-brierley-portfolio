/**
 * Base Styles
 *
 * Usage:
 * import '../base/'
 */

// Import Dependencies
import { createGlobalStyle } from 'styled-components';

// Import base styles
import normalize from './normalize';
import base from './base';
import print from './print';

// Add webfonts
import './webfonts';

// Global CSS Styles

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${base}
  ${print}
`;

export default GlobalStyle;
