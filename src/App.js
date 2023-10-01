import React, { useState } from "react";

const App = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [history, setHistory] = useState([]);

  function handleTranction(e) {
    e.preventDefault();
    const items = { product, price };
    setHistory([...history, items]);
    setPrice("");
    setProduct("");
  }
  const income = history
    .filter((item) => item.price > 0)
    .reduce((acc, c) => acc + c.price, 0);

  const expense = history
    .filter((item) => item.price < 0)
    .reduce((acc, c) => acc + c.price, 0);

  const balance = income + expense;

  return (
    <div>
      <h1>Expense tracker</h1>
      <p>Total BALANCE:{balance}</p>
      <p>INCOME:{income}</p>
      <p>EXPENSE:{expense}</p>
      <form onSubmit={handleTranction}>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button type="submit">ADD TRANSACTION</button>
      </form>
      {history.map((item, idx) => (
        <p key={idx}>
          {item.product}:{item.price}
        </p>
      ))}
    </div>
  );
};

export default App;
