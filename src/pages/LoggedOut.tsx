import React, { useState, useCallback, ReactNode } from 'react';
import { Tabs, Layout } from 'antd';
import { Location, navigate } from '@reach/router';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import About from '../components/About';
import Navbar from '../components/Navbar';

const LoggedOut = (props: any) => {
  const getActiveKey = useCallback(() => {
    const key =
      props.location && props.location.pathname === '/register' ? '2' : '1';
    return key;
  }, [props.location]);

  const [defaultKey] = useState(() => getActiveKey());

  const tabClick = (input: string) => {
    if (input === '1') {
      navigate('/login');
    }
    if (input === '2') {
      navigate('/register');
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <Layout.Content className="loggedin-layout">
        <div className="loggedOut">
          <About />
          <div className="loggedOut-box">
            <Tabs
              defaultActiveKey={defaultKey}
              type="card"
              onTabClick={tabClick}
              animated
            >
              <Tabs.TabPane tab={<span>Login</span>} key="1">
                <LoginForm />
              </Tabs.TabPane>
              <Tabs.TabPane tab={<span>Sign Up</span>} key="2">
                <RegisterForm />
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
      </Layout.Content>
    </React.Fragment>
  );
};

export const LoggedOutWithLocation = () => (
  <Location>{({ location }) => <LoggedOut location={location} />}</Location>
);

export default LoggedOutWithLocation;
