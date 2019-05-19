import React from "react";
import { Link } from "@reach/router";
import { Menu } from "antd";

const PrimaryMenu = ({
  mode = "horizontal",
  onPress
}: {
  mode?: any;
  onPress?: any;
}) => (
  <Menu mode={mode}>
    <Menu.Item key="home">
      <Link to="/" onClick={onPress}>
        Home
      </Link>
    </Menu.Item>
    <Menu.Item key="universities">
      <Link to="/universities" onClick={onPress}>
        Universities
      </Link>
    </Menu.Item>
  </Menu>
);
export default PrimaryMenu;
