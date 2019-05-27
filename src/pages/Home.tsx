import React from 'react';
import { Layout } from 'antd';
import Home from '../components/Home/Home';
interface PropType {
  default?: boolean;
  path?: string;
}

const Home1 = (props: PropType) => <Home />;
export default Home1;
