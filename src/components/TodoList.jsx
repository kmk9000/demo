import { useState } from "react";

export default function TodoList() {
  const [items, setItems] = useState(["Buy milk", "Walk dog", "Study React"]);
  const handleClick = (item) => {
    console.log(item);
  };
  return (
    <div>
      <h2>To Do List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleClick(item)}>Click here</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
