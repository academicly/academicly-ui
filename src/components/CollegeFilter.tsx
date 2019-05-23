import React from 'react';
import CollegeAISession from './CollegeAISession';
import CollegeAIList from './CollegeAIList';

const filterStyle = {
  display: 'inline-block',
  maxWidth: '16.66667%',
  flexBasis: '16.66667%'
};
const CollegeFilter = () => (
  <div
    className="collegeai-filter-view"
    style={{
      display: 'inline-block',
      maxWidth: '16.66667%',
      flexBasis: '16.66667%',
      backgroundColor: 'var(--defaultBackground)'
    }}
  >
    <CollegeAIList />
  </div>
);

export default CollegeFilter;
