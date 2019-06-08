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
            name: inputs => `${camelize(inputs.name)}.tsx`,
            content: inputs => `import React from 'react';
 import { styled, CSSProperties } from 'linaria/react';
 import { MediaQuery } from '../Layout';
 import './${camelize(inputs.name)}.less';

 export const Styled${camelize(inputs.name)} = styled.h1\`
 font-size: 1rem;
 font-weight: 700;
 color: $\{props => (props.color ? props.color : 'var(--text-color)')};
 line-height: 1.2;
 margin-bottom: 18px;
 $\{MediaQuery.phone} {
   font-size: 12px;
 }
 \`;

 interface ${camelize(inputs.name)}Props {
   style?: CSSProperties;
   children?: React.ReactNode;
 }

 const ${camelize(inputs.name)} = (props: ${camelize(
              inputs.name
            )}Props) => (<Styled${camelize(
              inputs.name
            )}>{props.children}</Styled${camelize(inputs.name)}>)

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
            name: inputs => `${camelize(inputs.name)}.stories.tsx`,
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
