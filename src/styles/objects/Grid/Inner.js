// Import Dependencies
import styled from 'styled-components';

// Import vars
import * as vars from '../../global/vars';

const Inner = styled.div`
  padding: 0 0 ${vars.grid.gutterValue}px;

  ${vars.breakpoint.medium`
    height: 100%;
    padding: ${vars.grid.gutterValue / 2}px;
  `};

  @media print {
    height: auto;
    padding: 0;
  }
`;

export default Inner;
