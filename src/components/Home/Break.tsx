import React from 'react';
import { styled, CSSProperties } from 'linaria/react';
import { MediaQuery } from '../Layout';
import { ReactComponent as BreakSVG } from '../../assets/Break.svg';

export const Break = styled.div`
  position: absolute;
  z-index: 1;
  height: 78px;
  width: 110%;
  bottom: -70px;
  left: -5%;
  right: -5%;
  display: inline-block;
  color: ${props => (props.color ? props.color : 'var(--bg-color)')};
  pointer-events: none;
  flex: initial;
  svg {
    top: auto;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    color: inherit;
    fill: currentcolor;
    pointer-events: none;
  }

  ${MediaQuery.tabletSM} {
    left: -50%;
    right: 0;
  }

  ${MediaQuery.desktopSM} {
    width: 150%;
    left: -25%;
    right: -25%;
  }
`;

interface BreakProps {
  color?: string;
  style?: CSSProperties;
}

export const BreakMain: React.SFC<BreakProps> = props => (
  <Break {...props}>
    <BreakSVG />
  </Break>
);

export default BreakMain;
