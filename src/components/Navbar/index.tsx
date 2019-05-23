/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import PrimaryMenu from './PrimaryMenu';
import SecondaryMenu from './SecondaryMenu';
import { Drawer, Button, Layout, Icon } from 'antd';
import 'antd/dist/antd.css';
import './navbar.css';
import logo from '../../assets/academicly.blue.png';
const Navbar = () => {
  const [toggled, setToggle] = useState(false);

  return (
    <Layout.Header
      style={{
        position: 'fixed',
        zIndex: 1,
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
            <img src={logo} />
          </div>
          <div className="primaryMenu">
            <PrimaryMenu />
          </div>
          <div className="secondaryMenu">
            <SecondaryMenu />
          </div>
          <Button
            style={{ margin: 0, marginTop: '15px' }}
            className="barsMenu"
            onClick={() => {
              setToggle(true);
            }}
          >
            <span className="barsBtn">
              <Icon type="menu" />
            </span>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={() => {
              setToggle(false);
            }}
            visible={toggled}
          >
            <PrimaryMenu mode="vertical" onPress={() => setToggle(false)} />
            <SecondaryMenu mode="vertical" onPress={() => setToggle(false)} />
          </Drawer>
        </div>
      </nav>
    </Layout.Header>
  );
};
export default Navbar;
