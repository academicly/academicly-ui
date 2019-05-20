import React from "react";
import CollegeAISession from "./CollegeAISession";

// const ListStyle = {
//   display: 'inline-block',
//   maxWidth: '83.3333%',
//   flexBasis: '83.333%',
//   position: 'absolute'
// };
const CollegeAIList = () => (
  <div
    style={{
      display: "inline-block",
      maxWidth: "83.3333%",
      flexBasis: "83.333%",
      position: "absolute",
      backgroundColor: "var(--defaultBackground)"
    }}
    className="collegeai-college-list "
    data-colleges-per-page="6"
    data-hide-add-to-list="true"
  />
);

export default CollegeAIList;
