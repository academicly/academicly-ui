/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import PrimaryMenu from './PrimaryMenu';
import SecondaryMenu from './SecondaryMenu';
import { Drawer, Layout, Icon } from 'antd';
import { Link } from '@reach/router';
import './navbar.less';
import Logo from '../Logo';
interface PropType {
  isLoggedIn?: boolean;
}

const Navbar = (props: PropType) => {
  const [toggled, setToggle] = useState(false);
  // only show if logged in
  // TODO: at some point we should move this logic out from here
  const loggedInMenus = () => (
    <div className="primaryMenu">
      <PrimaryMenu />
    </div>
  );

  const loggedOutMenus = () => (
    <div className="secondaryMenu">
      <SecondaryMenu />
    </div>
  );

  return (
    <Layout.Header
      style={{
        position: 'fixed',
        zIndex: 99,
        width: '100%',
        padding: 0,
        marginBottom: 0,
        backgroundColor: '#fff'
      }}
    >
      <nav className="menuBar">
        <div
          className="menuContent"
          style={{ maxWidth: '1280px', margin: 'auto' }}
        >
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          {props.isLoggedIn ? loggedInMenus() : loggedOutMenus()}
          <div
            className="barsMenu"
            onClick={() => {
              setToggle(true);
            }}
          >
            <span className="barsBtn">
              <Icon type="menu" />
            </span>
          </div>
          <Drawer
            placement="right"
            closable={false}
            onClose={() => {
              setToggle(false);
            }}
            visible={toggled}
          >
            <div
              style={{
                padding: '1rem'
              }}
            >
              <Logo
                style={{
                  left: '2rem',
                  marginBottom: '1rem',
                  padding: '1rem 0'
                }}
              />
              {props.isLoggedIn && (
                <PrimaryMenu mode="vertical" onPress={() => setToggle(false)} />
              )}
              {!props.isLoggedIn && (
                <SecondaryMenu
                  mode="vertical"
                  onPress={() => setToggle(false)}
                />
              )}
            </div>
          </Drawer>
        </div>
      </nav>
    </Layout.Header>
  );
};
export default Navbar;
