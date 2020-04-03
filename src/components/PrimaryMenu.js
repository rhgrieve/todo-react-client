import React from "react";

import { Menu } from "semantic-ui-react";

import logo from "./clipboard.png";

export default function PrimaryMenu() {
  return (
    <Menu fluid>
      <Menu.Item>
        <img alt="logo" src={logo} />
      </Menu.Item>
    </Menu>
  );
}
