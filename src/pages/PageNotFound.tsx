import React from 'react';
interface PropType {
  default?: boolean;
  path?: string;
}

const PageNotFound = (props: PropType) => (
  <div>
    <h1>Nothing to see here.</h1>
  </div>
);
export default PageNotFound;
