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
    <Menu.Item key="colleges">
      <Link to="/colleges" onClick={onPress}>
        Colleges
      </Link>
    </Menu.Item>
  </Menu>
);
export default PrimaryMenu;
