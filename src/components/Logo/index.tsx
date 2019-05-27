import React, { CSSProperties } from 'react';
import { ReactComponent as SVgLogo } from '../../assets/logo.svg';
import './logo.less';
interface PropType {
  style?: CSSProperties;
}

const Logo = (props: PropType) => (
  <div className="logo-svg" style={props.style}>
    <SVgLogo />
  </div>
);

export default Logo;
