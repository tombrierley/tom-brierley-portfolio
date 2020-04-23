import React, {
  useEffect,
  useState,
  useRef,
  ReactNode,
  FunctionComponent,
} from 'react';
import throttle from 'lodash.throttle';
import styled from 'styled-components';

type ParallaxProps = {
  children: ReactNode;
};

const Parallax: FunctionComponent<ParallaxProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(0);

  const handleScroll = throttle(() => {
    if (!containerRef || !containerRef.current) return;

    const scrollTop = containerRef.current.getBoundingClientRect().top;
    const containerHeight = containerRef.current.offsetHeight;

    if (scrollTop > containerHeight || scrollTop < -containerHeight) return;

    const scrollValue = scrollTop - (window.innerHeight - containerHeight) / 2;

    setTransform(scrollValue * 0.5);
  }, 8);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Container ref={containerRef}>
      <Inner transform={transform}>{children}</Inner>
    </Container>
  );
};

const Container = styled.div(
  ({ theme }) => `
    @media (${theme.breakpoints.medium}) {
      overflow: hidden;
      height: '100%';
      display: flex;
    };
  `,
);

type InnerProps = {
  transform: number;
};

const Inner = styled.div<InnerProps>(
  ({ theme, transform }) => `
    @media (${theme.breakpoints.medium}) {
      transform: translateY(${transform}px);
      margin: auto;
    };
  `,
);

export default Parallax;
