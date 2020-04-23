// Import Dependencies
import React, { useEffect, useState, FunctionComponent } from 'react';
import styled from 'styled-components';

type ImageLoaderProps = {
  imageUrl: string;
  alt: string;
};

const ImageLoader: FunctionComponent<ImageLoaderProps> = ({
  imageUrl,
  alt,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = handleImageLoad;

    return () => {
      img.src = '';
      img.onload = null;
    };
  });

  return (
    <Wrapper>
      <Background isLoaded={isLoaded} imageUrl={imageUrl}>
        <img src={imageUrl} alt={alt} />
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  background-color: ${(props) => props.theme.colors.grey200};
  display: block;
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
  width: 100%;
  z-index: 1;

  @media (${(props) => props.theme.breakpoints.medium}) {
    padding-bottom: 0;
  }

  img {
    display: none;
  }
`;

type BackgroundProps = {
  isLoaded: boolean;
  imageUrl: string;
};

const Background = styled.div<BackgroundProps>`
  background-image: url(${(props) => props.imageUrl});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: scale(1.1);
  transition: opacity ${(props) => props.theme.base.transitionSpeed}
      ${(props) => props.theme.easing.enter} 0s,
    transform ${(props) => props.theme.base.transitionSpeed}
      ${(props) => props.theme.easing.enter} 0s;

  ${(props) => props.isLoaded
    && `
    opacity: 1;
    transform: none;
  `};
`;

export default ImageLoader;
