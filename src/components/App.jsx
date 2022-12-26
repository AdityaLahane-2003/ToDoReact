import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }
  function handleClick(event) {
    setListItem((prev) => {
      return [...prev, item];
    });
    setItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={item}
          placeholder="Add Item"
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <ToDoItem item={listItem} />
    </div>
  );
}

export default App;
