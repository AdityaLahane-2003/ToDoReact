import React from "react";
function InputArea(props) {
return (<div className="form">
<input
  onChange={props.onChange}
  type="text"
  value={props.item}
  placeholder="Add Item"
/>
<button onClick={props.onClick}>
  <span>Add</span>
</button>
</div>)
}

export default InputArea; 