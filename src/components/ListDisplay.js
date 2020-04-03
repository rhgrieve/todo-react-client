import React, { useState } from "react";

import { Segment } from "semantic-ui-react";

import Todo from "./Todo";

export default function ListDisplay(props) {
  return (
    <>
      {props.grouped ? (
        <>
          {/* {groupResult &&
        groupResult.keys.map(day => {
          return (
            <Segment.Group>
              <Segment>{day}</Segment>
            </Segment.Group>
          );
        })} */}
        </>
      ) : (
        <Segment.Group>
          {props.todos
            .filter(todo =>
              props.activeFilter ? todo.tags.includes(props.activeFilter) : todo
            )
            .map((todo, index) => {
              return <Todo todo={todo} key={index} />;
            })}
        </Segment.Group>
      )}
    </>
  );
}
