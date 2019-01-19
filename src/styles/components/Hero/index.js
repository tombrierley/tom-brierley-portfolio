// Import Dependencies
import styled from 'styled-components';

// Import Globals
import * as vars from '../../global/vars';

// Import Components
import Bio from './Bio';
import Title from './Title';

const Hero = styled.section`
  background-color: ${vars.colors.grey800};
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  overflow: hidden;
  position: relative;

  &:after {
    background-color: ${vars.colors.black};
    content: '';
    height: 300%;
    position: absolute;
    transform: rotate(130deg);
    transition: transform 500ms ${vars.global.easing} 500ms;
    width: 100%;

    .wf-active & {
      transform: rotate(130deg) translate(0%, -100%);
    }
  }
`;

Hero.Bio = Bio;
Hero.Title = Title;

export default Hero;
