import React, { useState } from "react";
import { Segment, Checkbox, List } from "semantic-ui-react";

export default function Todo(props) {
  const [checked, setChecked] = useState(false);

  return (
    <Segment className="todo" key={props.todo.index} secondary={checked}>
      <Checkbox
        className={checked && "completed"}
        onChange={() => setChecked(!checked)}
        label={props.todo.body}
      />
      {props.todo.tags && (
        <List horizontal floated="right">
          {props.todo.tags.map((tag, index) => {
            return (
              <List.Item key={index} className="tag" as="a">
                {tag}
              </List.Item>
            );
          })}
        </List>
      )}
    </Segment>
  );
}
