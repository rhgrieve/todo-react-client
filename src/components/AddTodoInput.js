import React, { useState } from "react";

import { Input, Icon } from "semantic-ui-react";

const moment = require("moment");

export default function AddTodoInput(props) {
  const [inputString, setInputString] = useState("");

  /**
   * Parses `inputString` for tags and returns the todo and tags as a JSON object
   *
   * @returns {Object} Object represents a Todo item and tags
   */
  const parseInputString = () => {
    const tagRegex = /#[a-zA-Z]*/gm;
    const matches = inputString.match(tagRegex);
    let matchedTags = matches
      ? [
          ...matches.map(tag => {
            return tag.toLowerCase();
          })
        ]
      : [];

    return { tags: matchedTags, date: moment(), body: inputString };
  };

  return (
    <Input
      transparent
      type="text"
      placeholder="Add todo"
      onChange={e => {
        setInputString(e.target.value);
      }}
      onKeyPress={e => {
        if (e.key === "Enter") {
          if (inputString === "") {
            return true;
          } else {
            let todo = parseInputString();
            // addTodo(todo);
            props.addTodo(todo);
            setInputString("");
            if (todo.tags !== []) {
              props.setGlobalTags(todo.tags);
            }
          }
        }
      }}
      value={inputString}
      icon={<Icon name="plus" link />}
      iconPosition="left"
      fluid
    />
  );
}
