import { configure } from '@storybook/react';
import './theme.less';

const req = require.context('../src', true, /\.stories\.(js|jsx|ts|tsx)$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
