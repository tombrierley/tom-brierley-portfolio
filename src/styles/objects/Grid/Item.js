// Import Dependencies
import styled from 'styled-components';

// Import Utilities
import { getModifier } from '../../../utils';

// Import vars
import * as vars from '../../global/vars';
import { calculateGridPercentage } from '../../global/utils';

const Item = styled.li`
  ${vars.breakpoint.medium`
      /* display: inline-block; */
      flex: ${props => `0 1 ${calculateGridPercentage(getModifier(props, 'cols'), vars.grid.columns) || 'auto'}`};
      width: ${props => calculateGridPercentage(getModifier(props, 'cols'), vars.grid.columns) || 'auto'};
  `};

  ${props => getModifier(props, 'colsLarge')
    && vars.breakpoint.large`

      flex: ${`0 1 ${calculateGridPercentage(getModifier(props, 'colsLarge'), vars.grid.columns)}`};
      width: ${calculateGridPercentage(getModifier(props, 'colsLarge'), vars.grid.columns)};
  `};

  ${props => getModifier(props, 'colsXLarge')
    && vars.breakpoint.xLarge`

      flex: ${`0 1 ${calculateGridPercentage(getModifier(props, 'colsXLarge'), vars.grid.columns)}`};
      width: ${calculateGridPercentage(getModifier(props, 'colsXLarge'), vars.grid.columns)};
  `};

  ${props => getModifier(props, 'colsXxLarge')
    && vars.breakpoint.xxLarge`

      flex: ${`0 1 ${calculateGridPercentage(getModifier(props, 'colsXxLarge'), vars.grid.columns)}`};
      width: ${calculateGridPercentage(getModifier(props, 'colsXxLarge'), vars.grid.columns)};
  `};

  ${props => getModifier(props, 'colsXxxLarge')
    && vars.breakpoint.xxxLarge`

      flex: ${`0 1 ${calculateGridPercentage(getModifier(props, 'colsXxxLarge'), vars.grid.columns)}`};
      width: ${calculateGridPercentage(getModifier(props, 'colsXxxLarge'), vars.grid.columns)};
  `};

  ${props => getModifier(props, 'colsXxxxLarge')
    && vars.breakpoint.xxxxLarge`

      flex: ${`0 1 ${calculateGridPercentage(getModifier(props, 'colsXxxxLarge'), vars.grid.columns)}`};
      width: ${calculateGridPercentage(getModifier(props, 'colsXxxxLarge'), vars.grid.columns)};
  `};

  ${props => getModifier(props, 'pdf')
    && `
      @media print {
        display: block;
        float: left;
        margin-right: 1%;
        overflow: hidden;
        width: 32%;
      }
    `};
`;

export default Item;
