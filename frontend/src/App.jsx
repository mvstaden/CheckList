import React, { useState } from "react";
import { Form, Logo, PackingList, Stats } from "./components";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: false },
  { id: 4, description: "Laptop", quantity: 12, packed: false },
  { id: 5, description: "Bags", quantity: 12, packed: true },
  { id: 6, description: "Socks", quantity: 12, packed: true },
];
const App = () => {
  const [items, setItems] = useState(initialItems);



  const handleAddItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const handleDelete = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
