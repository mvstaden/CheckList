import React from "react";

const Item = ({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onToggleItem,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        checked={packed}
        onChange={(e) => onToggleItem(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {description} {quantity}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
};

export default Item;
