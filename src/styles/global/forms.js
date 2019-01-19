import * as vars from './vars';
import { autoFill } from './animations';

const forms = {
  fieldReset: `
    appearance: none;
    background-color: transparent;
    background-image: none;
    border-radius: 0;
    border: none;
    box-shadow: none;
    line-height: 1;
    position: relative;
    width: 100%;

    &:-webkit-autofill {
      -webkit-animation-name: ${autoFill};
      -webkit-animation-fill-mode: both;
    }
  `,
  rangeTrack: `
    -webkit-appearance: none;
    background: ${vars.colors.white};
    border-radius: 0;
    border: none;
    box-shadow: none;
    cursor: pointer;
    height: 1px;
    width: 100%;
  `,
  rangeThumb: `
    -webkit-appearance: none;
    background: ${vars.colors.orange};
    border-radius: 0;
    border: none;
    box-shadow: none;
    cursor: pointer;
    height: 9px;
    margin-top: -4px;
    width: 9px;
  `,
};

export default forms;
