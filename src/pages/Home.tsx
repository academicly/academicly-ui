import React from "react";
import { Layout } from "antd";
interface PropType {
  default?: boolean;
  path?: string;
}

const Home = (props: PropType) => <h1 style={{ color: "red" }}>Home page</h1>;
export default Home;
