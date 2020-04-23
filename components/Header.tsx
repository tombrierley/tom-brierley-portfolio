import React, { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';

import ContentContext from '../state/ContentContext';
import Typography from './Typography';

import LinkedInIcon from '../assets/icons/linked';
import InstagramIcon from '../assets/icons/instagram';
import GitHubIcon from '../assets/icons/github';

import { visuallyHidden } from '../theme/utils';

type HeaderProps = {};

const Header: FunctionComponent<HeaderProps> = () => {
  const { name } = useContext(ContentContext);

  return (
    <LeftFixedBar>
      <Logo href="/">
        <Typography type="p" as="h1">
          {name}
        </Typography>
      </Logo>

      <SocialNav>
        <li>
          <a
            href="https://www.linkedin.com/in/tombrierley/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            <span>Tom Brierley LinkedIn</span>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/tombrierley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <span>Tom Brierley Github</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/brierley_te/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            <span>Tom Brierley Instagram</span>
          </a>
        </li>
      </SocialNav>
    </LeftFixedBar>
  );
};

const LeftFixedBar = styled.header(
  ({ theme }) => `
    display: flex;
    height: ${theme.components.sideBarWidth};
    padding: 0 ${theme.spacing.large};

    @media (${theme.breakpoints.medium}) {
      align-items: flex-start;
      bottom: 0;
      flex-direction: column;
      height: 100%;
      left: 0;
      padding: ${theme.spacing.xxLarge} 0;
      position: fixed;
      top: 0;
      width: ${theme.components.sideBarWidth};
    };
  `,
);

const Logo = styled.a(
  ({ theme }) => `
    margin: auto auto auto 0;

    

    @media (${theme.breakpoints.medium}) {
      align-items: center;
      display: flex;
      margin: 0;
      transform: rotate(-90deg) translateX(-100%);
      transform-origin: left top;
      height: ${theme.components.sideBarWidth}
      white-space: nowrap;

      &:after {
        background-color: ${theme.colors.textColor};
        content: '';
        display: block;
        height: 1px;
        margin-left: ${theme.spacing.base};
        transition: transform ${theme.base.transitionSpeed} ${theme.easing.move};
        transform-origin: right center;
        transform: scaleX(0);
        width: ${theme.spacing.xxLarge};
      }
  
      h1 {
        transition: transform ${theme.base.transitionSpeed} ${theme.easing.move};
        transform-origin: right center;
        transform: translateX(90px);
      }
  
      &:hover,
      &:focus {
        &:after {
          transform: scaleX(1);
        }
  
        h1 {
          transform: translateX(0);
        }
      }
    }
  `,
);

const SocialNav = styled.ul(
  ({ theme }) => `
    display: flex;
    margin: auto 0 auto auto;

    @media (${theme.breakpoints.medium}) {
      flex-direction: column;
      margin: auto auto 0;
    }

    li {
      padding: 0 ${theme.spacing.xSmall};

      @media (${theme.breakpoints.medium}) {
        padding: ${theme.spacing.small} 0;
      }

      &:last-child {
        padding-right: 0;

        @media (${theme.breakpoints.medium}) {
          padding-bottom: 0;
        }
      }

      a {
        display: block;
        position: relative;

        svg {
          display: block;
          fill: ${theme.colors.textColor};
          height: ${theme.spacing.small};
          width: ${theme.spacing.small};
        }
    
        span {
          ${visuallyHidden}
        }

        &:after {
          @media (${theme.breakpoints.medium}) {
            background-color: ${theme.colors.textColor};
            content: '';
            display: block;
            height: 1px;
            left:25px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%) scaleX(0);
            transition: transform ${theme.base.transitionSpeed} ${theme.easing.move};
            transform-origin: left center;
            width: ${theme.spacing.base};
          }
        }

        &:hover, &:focus {
          &:after {
            @media (${theme.breakpoints.medium}) {
              transform: translateY(-50%) scaleX(1);
            }
          }
        }
      }
    }


  `,
);

export default Header;
