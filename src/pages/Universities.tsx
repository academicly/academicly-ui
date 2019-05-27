import React from 'react';
import { Layout } from 'antd';
import CollegeList from '../components/CollegeList';

interface PropType {
  default?: boolean;
  path?: string;
}

const Universities = (props: PropType) => (
  <div
    style={{
      paddingTop: '70px',
      maxWidth: '1280px',
      width: '100%',
      margin: 'auto',
      display: 'inline-block'
    }}
  >
    <CollegeList />
  </div>
);
export default Universities;
