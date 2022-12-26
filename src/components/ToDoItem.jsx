import React, { useState } from "react";

function ToDoItem(props) {
  // const [isLine, setLine] = useState(false);
  // function lineThrough() {
  //   setLine((prev) => {
  //     return !prev;
  //   });
  // }
  // const add = props.item;
  return (
           <li
            // onClick={lineThrough}
            onClick={()=>{
              props.onChecked(props.id)
            }}
            // style={{ textDecoration: isLine && "line-through" }}
          >
            {props.item}
          </li>
  );
}

export default ToDoItem;
