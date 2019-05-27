import React from 'react';
import { styled, CSSProperties } from 'linaria/react';
import { MediaQuery } from '../Layout';

//import { ReactComponent as IllustrationOne } from '../../assets/illustration_one.svg';
import pic from '../../assets/illustration_one.svg';

export const Illustration = styled.div`
  img {
    grid-area: second;
    position: relative;
    justify-self: center;
    top: -25vh;
    height: 100vh;
    max-height: 90vw;
    z-index: 0;
    transition: top 0.2s ease-in-out, height 0.2s ease-in-out,
      left 0.2s ease-in-out;
    @media (max-width: 1480px) {
      top: -20vh;
      height: 80vh;
      max-height: 75vw;
      left: 20vw;
    }
    @media (max-width: 1080px) {
      top: -12vh;
      max-height: 66vw;
    }
    @media (max-width: 800px) {
      top: -6vh;
      left: 8px;
      height: 66vh;
      max-height: 100vw;
    }
    @media (max-width: 640px) {
      top: -2vh;
    }
    @media (max-width: 460px) {
      display: none;
    }
  }
`;

interface BreakWiggleProps {
  color?: string;
  style?: CSSProperties;
}

export const IllustrationMain: React.SFC<BreakWiggleProps> = props => (
  <Illustration {...props}>
    <img src={pic} alt="ddddd" />
  </Illustration>
);

export default IllustrationMain;
