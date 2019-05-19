import React from "react";
import { Layout } from "antd";
import CollegeList from "../components/CollegeList";

interface PropType {
  default?: boolean;
  path?: string;
}

const Universities = (props: PropType) => (
  <div>
    <CollegeList />
  </div>
);
export default Universities;
