import React from "react";

const Item = ({ id, description, quantity, packed }) => {
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {description} {quantity}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
