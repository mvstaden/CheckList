import React from "react";
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
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={initialItems} />
      <Stats />
    </div>
  );
};

export default App;
