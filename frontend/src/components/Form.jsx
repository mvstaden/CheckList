import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your next trip? 🗺️</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Enter item..." />
      <button>Add</button>
    </form>
  );
};

export default Form;
