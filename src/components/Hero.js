import React from 'react';
import PropTypes from 'prop-types';

// Import Styled Components
import Container from '../styles/objects/Container';
import StyledHero from '../styles/Components/Hero';

const Hero = ({ data }) => (
  <StyledHero>
    <Container>
      <StyledHero.Title>{data.name}</StyledHero.Title>
      <StyledHero.Bio>{data.shortBio.shortBio}</StyledHero.Bio>
    </Container>
  </StyledHero>
);

Hero.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Hero;
