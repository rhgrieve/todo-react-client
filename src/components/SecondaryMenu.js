import React, { useState } from "react";

import { Menu, Dropdown } from "semantic-ui-react";

export default function PrimaryMenu(props) {
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeDropdownItem, setActiveDropdownItem] = useState("none");

  const handleGroupBy = (e, { name }) => {
    setActiveDropdownItem(name);
  };

  return (
    <Menu secondary text position="right">
      <Menu.Menu position="left">
        <Dropdown item text="Group by">
          <Dropdown.Menu>
            <Dropdown.Item
              name="none"
              active={activeDropdownItem === "none"}
              onClick={handleGroupBy}
            >
              None
            </Dropdown.Item>
            <Dropdown.Item
              name="day"
              active={activeDropdownItem === "day"}
              onClick={handleGroupBy}
            >
              Day
            </Dropdown.Item>
            <Dropdown.Item
              name="tag"
              active={activeDropdownItem === "tag"}
              onClick={handleGroupBy}
            >
              Tag
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item header>Tags</Menu.Item>
        {props.tags.map((tag, index) => {
          return (
            <Menu.Item
              key={index}
              active={props.activeFilter === tag}
              name={tag}
              onClick={props.filterByTag}
              as="a"
            >
              {tag}
            </Menu.Item>
          );
        })}
      </Menu.Menu>
    </Menu>
  );
}
