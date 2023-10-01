import React, { useState } from "react";
import "./App.css";

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
    <div className="container">
      <h1>EXPENSE TRACKER</h1>
      <div className="balance">
        <p>Total BALANCE: {balance}</p>
      </div>
      <div className="box">
        <p>INCOME: {income}</p>
        <div className="line"></div>
        <p>EXPENSE: {expense}</p>
      </div>
      <div className="history">
        <h1>History</h1>
        <hr />
        {history.map((item, idx) => (
          <div key={idx} className="history_item">
            <p>{item.product}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleTranction}>
        <div className="input_container">
          <input
            placeholder="Enter product"
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          <input
            placeholder="Enter price"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <button type="submit" className="btn">
          ADD TRANSACTION
        </button>
      </form>
    </div>
  );
};

export default App;
