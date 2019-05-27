import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '.';

storiesOf('Logo', module)
  .add('default', () => (
    <Logo
      style={{
        top: '50px',
        left: '50px'
      }}
    />
  ))
  .add('logo on hover', () => (
    <Logo
      style={{
        top: '50px',
        left: '50px',
        color: 'var(--secondary-text-color)'
      }}
    />
  ));
