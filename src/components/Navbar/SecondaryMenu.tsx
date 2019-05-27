import React from 'react';
import { Menu } from 'antd';
import { Link } from '@reach/router';

const SecondaryMenu = ({
  mode = 'horizontal',
  onPress
}: {
  mode?: any;
  onPress?: any;
}) => (
  <Menu mode={mode}>
    <Menu.Item key="login">
      <Link to="/login" onClick={onPress} className="login-button">
        Log in
      </Link>
    </Menu.Item>
    <Menu.Item key="register" className="register-button">
      <Link to="/register" onClick={onPress}>
        Register
      </Link>
    </Menu.Item>
  </Menu>
);

export default SecondaryMenu;
