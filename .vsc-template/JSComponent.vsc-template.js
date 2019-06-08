(function Template() {
  const camelize = str =>
    str.replace(/\W+(.)/g, (_match, chr) => chr.toUpperCase());
  return {
    userInputs: [
      {
        title: 'Enter the component name',
        argumentName: 'name',
        defaultValue: 'HomeComponent'
      }
    ],
    template: [
      {
        type: 'folder',
        name: inputs => `${camelize(inputs.name)}`,
        children: [
          {
            type: 'file',
            name: inputs => `${camelize(inputs.name)}.jsx`,
            content: inputs => `import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'linaria/react';
import { MediaQuery } from '../Layout';
import './${camelize(inputs.name)}.less';

export const Styled${camelize(inputs.name)} = styled.h1\`
font-size: 1rem;
font-weight: 700;
color: $\{props => (props.color ? props.color : 'var(--text-color)')};
line-height: 1.2;
margin-bottom: 18px;
$\{MediaQuery.phone} {
  font-size: 14px;
}
\`;

const ${camelize(inputs.name)} = (props) => (<Styled${camelize(
              inputs.name
            )}>{props.children}</Styled${camelize(inputs.name)}>)

${camelize(inputs.name)}.propTypes = {
  children: PropTypes.element
};

export default ${camelize(inputs.name)};`
          },
          {
            type: 'file',
            name: inputs => `${camelize(inputs.name)}.less`,
            content: inputs => `.${camelize(inputs.name)}{
display: flex;
}
`
          },
          {
            type: 'file',
            name: inputs => `${camelize(inputs.name)}.stories.js`,
            content: inputs => `import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ${camelize(inputs.name)} from './${camelize(inputs.name)}';

storiesOf('${camelize(inputs.name)}', module).add('default', () => (
  <${camelize(inputs.name)}/>
));
            `
          }
        ]
      }
    ]
  };
});
