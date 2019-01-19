// Import Dependencies
import styled from 'styled-components';

// Import vars
import * as vars from './vars';

export const HideOnMobile = styled.div`
  display: none;

  ${vars.breakpoint.medium`
    display: block;
  `};
`;
