import React from 'react';
import UniversityCard from './UniversityCard';
import CollegeAIList from './CollegeAIList';
import { Layout } from 'antd';
import CollegeFilter from './CollegeFilter';
const { Content } = Layout;

const CollegeList = () => (
  <div>
    <CollegeFilter />
    <CollegeAIList />
  </div>
);

export default CollegeList;
