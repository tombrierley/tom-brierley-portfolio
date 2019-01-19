// Import Dependencies
import styled from 'styled-components';

// Import Utilities
import { getModifier } from '../../../utils';

// Import elements
import Item from './Item';
import Inner from './Inner';

// Import vars
import * as vars from '../../global/vars';

const Grid = styled.ul`
  ${vars.breakpoint.medium`
    align-content: flex-start;
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: -${vars.grid.gutterValue / 2}px;
  `};

  ${props => getModifier(props, 'reverse')
    && vars.breakpoint.medium`
      flex-direction: row-reverse;
  `};

  @media print {
    clear: both;
    display: block;
    margin: 0;
    text-align: left;
    width: 100%;
  }
`;

// Set elements
Grid.Item = Item;
Grid.Inner = Inner;

export default Grid;
