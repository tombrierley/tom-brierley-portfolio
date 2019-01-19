// Import Dependencies
import styled from 'styled-components';

// Import Globals
import * as vars from '../../global/vars';

const Title = styled.h1`
  align-items: center;
  color: ${vars.colors.white};
  display: flex;
  font-size: ${vars.fontSize.medium};
  font-weight: ${vars.fontWeight.bold};
  letter-spacing: 0.02em;
  margin-bottom: 40px;
  text-transform: uppercase;

  &:before {
    background-color: ${vars.colors.white};
    content: '';
    display: block;
    height: 1px;
    margin-right: ${vars.spacing.xSmall};
    transform: translateY(-1px);
    width: ${vars.spacing.small};
  }
`;

export default Title;
