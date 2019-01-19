import * as vars from '../global/vars';

export default `
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  ::selection {
    color: ${vars.colors.white};
    background: ${vars.colors.black};
  }

  ::-moz-selection {
    color: ${vars.colors.white};
    background: ${vars.colors.black};
  }

  html,
  body {
    -moz-osx-font-smoothing: auto;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backface-visibility: hidden;
    -webkit-font-smoothing: antialiased !important;
    color: ${vars.baseFontColor};
    font-family: ${vars.baseFontFamily};
    font-size: ${vars.baseFontSize};
    font-weight: normal;
    height: 100%;
    line-height: 1.6;
    margin: 0;
    min-height: 100%;
    min-width: 320px;
    position: relative;
    text-rendering: optimizeLegibility !important;
    width: 100%;
    z-index: 0;
  }

  body {
    background-color: ${vars.colors.grey100};
  }

  a[href*="mailto:"] {
    word-wrap: break-word;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: ${vars.baseFontSize};
    outline: none;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${vars.spacing.small};
    margin-top: 0;
  }

  {/* Reset Lists */}
  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  {/* Images */}
  figure {
    margin: 0;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  a {
    color: ${vars.colors.white};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: ${vars.spacing.small};

    b,
    strong {
      font-weight: bold;
    }

    i,
    em {
      font-style: italic;
    }
  }

  svg {
    display: inline-block;
  }

  {/* Default Transitions */}
  a,
  input,
  select,
  textarea,
  button,
  [class^="c-btn"] {
    -webkit-tap-highlight-color: ${vars.global.tapHighlightColor};
    transition-duration: 0.5s;
    transition-property: background-color, color, opacity, border, border-color, background-position, outline, box-shadow, border-bottom, text-decoration, left, top, transform;
    transition-timing-function: ${vars.global.easing};
    transform-origin: center center;
  }
`;
