import React, {
  ReactNode,
  FunctionComponent,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';

import queryProp from '../utils/queryProp';
import ThemeContext from '../state/ThemeColorProvider';

type SectionProps = {
  children: ReactNode;
  size?: string;
  setThemeOnEntry?: string;
  center?: boolean | false;
};

const Section: FunctionComponent<SectionProps> = ({
  children,
  size,
  setThemeOnEntry,
  center,
}) => {
  const { state, dispatch } = useContext(ThemeContext);
  const container = useRef<HTMLElement>(null);
  let isInView: boolean = false;

  const handleSetInView = useCallback(() => {
    if (!isInView) {
      dispatch({
        type: 'SET_DARK_MODE',
        payload: setThemeOnEntry === 'dark',
      });
    }

    isInView = true;
  }, [state]);

  const handleSetNoteInView = () => {
    isInView = false;
  };

  const handleScroll = throttle(() => {
    if (!container || !container.current) return;

    const rect = container!.current!.getBoundingClientRect();

    if (
      rect.top < window.innerHeight / 2
      && rect.top + container.current.offsetHeight > window.innerHeight / 2
    ) {
      handleSetInView();
    } else {
      handleSetNoteInView();
    }
  }, 20);

  useEffect(() => {
    if (!setThemeOnEntry) return;

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    // eslint-disable-next-line
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledSection size={size} center={center} ref={container}>
      {children}
    </StyledSection>
  );
};

type SectionStyleProps = { size?: string; center?: boolean | false };

const StyledSection = styled.section<SectionStyleProps>(
  ({ theme, size, center }) => `
  padding: ${theme.spacing.xxLarge} 0;
  width: 100%;

  @media(${theme.breakpoints.medium}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
    width: 100%;
  }

  ${queryProp(
    !!center,
    `
      @media(${theme.breakpoints.medium}) {
        justify-content: center;
      }
    `,
  )}

  ${queryProp(
    size === 'small',
    `
      @media(${theme.breakpoints.medium}) {
        max-width: ${theme.components.sectionWidthSmall};
      }
    `,
  )}
  
    
  ${queryProp(
    size === 'medium',
    `
      @media(${theme.breakpoints.medium}) {
        max-width: ${theme.components.sectionWidthMedium};
      }
    `,
  )}



`,
);

export default Section;
