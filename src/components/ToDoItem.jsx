import React, { useState } from "react";

function ToDoItem(props) {
  const [isLine, setLine] = useState(false);
  function lineThrough() {
    setLine((prev) => {
      return !prev;
    });
  }
  const add = props.item;
  return (
    <div>
      <ul>
        {add.map((element) => (
          <li
            onClick={lineThrough}
            style={{ textDecoration: isLine && "line-through" }}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoItem;
