import React from 'react';
import { Router } from '@reach/router';
import { Layout } from 'antd';
import Home from './Home';
import Universities from './Universities';
import PageNotFound from './PageNotFound';
import NavBar from '../components/Navbar';
import CollegeAISession from '../components/CollegeAISession';

const LoggedIn = () => (
  <React.Fragment>
    <NavBar />
    <CollegeAISession />
    <Layout.Content
      style={{
        paddingTop: '70px',
        maxWidth: '1280px',
        width: '100%',
        margin: 'auto',
        display: 'inline-block'
      }}
      className="loggedin-layout"
    >
      <Router>
        <Home path="/" />
        <PageNotFound default path="/404" />
        <Universities path="/universities" />
      </Router>
    </Layout.Content>
  </React.Fragment>
);

export default LoggedIn;
