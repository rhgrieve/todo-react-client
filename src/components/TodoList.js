import React, { useState } from "react";
import { Container } from "semantic-ui-react";

import PrimaryMenu from "./PrimaryMenu";
import SecondaryMenu from "./SecondaryMenu";
import ListDisplay from "./ListDisplay";
import AddTodoInput from "./AddTodoInput";

const moment = require("moment");

export default function TodoList() {
  // STATES

  const [todos, setTodos] = useState([
    {
      tags: ["#cats", "#cars"],
      date: moment().subtract(1, "days"),
      body: "This is another todo"
    },
    {
      tags: ["#cats", "#cars"],
      date: moment().subtract(2, "days"),
      body: "Go grocery shopping"
    },
    {
      tags: ["#cats", "#cars"],
      date: moment().subtract(3, "days"),
      body: "This is another todo"
    }
  ]);
  const [tags, setTags] = useState(["#cats", "#cars"]);
  const [activeFilter, setActiveFilter] = useState(null);
  const [groupByDay, setGroupByDay] = useState(false);
  const [groupResult, setGroupResult] = useState({});

  // console.log(group);

  // UTILITY FUNCTIONS

  /**
   * Creates a new Todo item and adds it to the list
   *
   * @param {String} todo
   */
  const addTodo = todo => {
    setTodos([...todos, todo]);
  };

  /**
   * Adds new tags to `tags` global state if unique
   *
   * @param {Array} todoTags
   */
  const setGlobalTags = todoTags => {
    todoTags.map(tag => {
      if (!tags.includes(tag)) {
        return setTags([...tags, tag]);
      } else {
        return true;
      }
    });
  };

  /**
   * Sets/toggles the active filter state
   *
   * @param {Event} e
   * @param {String} name
   */
  const filterByTag = (e, { name }) => {
    if (activeFilter && activeFilter === name) {
      setActiveFilter(null);
    } else {
      setActiveFilter(name);
    }
  };

  const groupTodosByDay = () => {
    let group = todos.reduce((obj, current) => {
      let key = current.date.format("MMM Do YYYY");
      if (!obj.hasOwnProperty(key)) {
        obj[key] = [];
      }
      obj[key].push(current);
      return obj;
    }, {});
    return group;
  };

  const toggleGroupByDay = () => {
    if (!groupByDay) {
      console.log("enabling group by day");
      const filter = groupTodosByDay();
      console.log(filter);
      setGroupResult(filter);
    } else {
      setGroupResult({});
      console.log("disabling group by day");
    }
    setGroupByDay(!groupByDay);
  };

  // VIEW

  return (
    <>
      <PrimaryMenu />
      <Container>
        <SecondaryMenu
          groupByDay={groupByDay}
          toggleGroupByDay={toggleGroupByDay}
          activeFilter={activeFilter}
          tags={[...tags]}
          filterByTag={filterByTag}
        />
        <ListDisplay
          grouped={groupByDay}
          todos={[...todos]}
          activeFilter={activeFilter}
        />
        <AddTodoInput addTodo={addTodo} setGlobalTags={setGlobalTags} />
      </Container>
    </>
  );
}
