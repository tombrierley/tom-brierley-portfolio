import React, { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';

import LocationIcon from '../assets/icons/location';
import ContentContext from '../state/ContentContext';
import Typography from './Typography';

type FooterProps = {};

const Footer: FunctionComponent<FooterProps> = () => {
  const { contactEmail, location } = useContext(ContentContext);

  return (
    <RightFixedBar>
      <Email href={`mailto:${contactEmail}`}>
        <Typography type="p" as="p">
          {contactEmail}
        </Typography>
      </Email>

      <Location>
        <LocationIcon />
        <Typography type="p" as="p">
          {location}
        </Typography>
      </Location>
    </RightFixedBar>
  );
};

const RightFixedBar = styled.footer(
  ({ theme }) => `
    display: flex;
    height: ${theme.components.sideBarWidth};
    padding: 0 ${theme.spacing.large};

    @media (${theme.breakpoints.medium}) {
      bottom: 0;
      flex-direction: column;
      height: 100%;
      right: 0;
      padding: ${theme.spacing.xxLarge} 0;
      position: fixed;
      top: 0;
      width: ${theme.components.sideBarWidth};
    };
  `,
);

const Email = styled.a(
  ({ theme }) => `
    margin: auto auto auto 0;

    @media (${theme.breakpoints.medium}) {
      align-items: center;
      align-self: flex-end;
      display: flex;
      margin: 0;
      transform: rotate(90deg) translateX(100%);
      transform-origin: right top;
      height: ${theme.components.sideBarWidth}
      white-space: nowrap;

      &:before {
        background-color: ${theme.colors.textColor};
        content: '';
        display: block;
        height: 1px;
        margin-right: ${theme.spacing.base};
        transition: transform ${theme.base.transitionSpeed} ${theme.easing.move};
        transform-origin: left center;
        width: ${theme.spacing.xxLarge};
      }
  
      p {
        transition: transform ${theme.base.transitionSpeed} ${theme.easing.move};
        transform-origin: left center;
      }
  
      &:hover,
      &:focus {
        &:before {
          transform: scaleX(0);
        }
  
        p {
          transform: translateX(-${theme.spacing.xxLarge});
        }
      }
    }
  `,
);

const Location = styled.div(
  ({ theme }) => `
    display: flex;
    margin: auto 0 auto auto;
  
    svg {
      display: block;
      fill: ${theme.colors.textColor};
      height: ${theme.spacing.small};
      margin-right: ${theme.spacing.base};
      width: ${theme.spacing.small};

      @media (${theme.breakpoints.medium}) {
        transform: rotate(-90deg);
      }
    }

    @media (${theme.breakpoints.medium}) {
      align-self: flex-end;
      align-items: center;
      display: flex;
      margin: auto 0 0 0;
      transform: rotate(90deg) translateX(64%);
      transform-origin: right top;
      height: ${theme.components.sideBarWidth}
      white-space: nowrap;
    }
  `,
);

export default Footer;
