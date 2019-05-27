import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from '../Navbar';
import '../../styles/index.less';
import '../../styles/App.less';

storiesOf('Navbar', module)
  .add('navbar logged out', () => <Navbar />)
  .add('Navbar logged in', () => <Navbar isLoggedIn />);
