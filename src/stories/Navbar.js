import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Navbar from '../components/Navbar';

storiesOf('Navbar', module)
  .add('navbar default', () => <Navbar />)
  .add('Navbar logged in', () => <Navbar onClick={action('clicked')} />);
