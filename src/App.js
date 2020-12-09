import React, { useState, useEffect } from "react";
import "./styles.css";

import { Card } from "./components/Card";
import { Overlay } from "./components/Overlay";

const endpoint = "https://www.mocky.io/v2/5ecea45b3000008800ea13cd";

// Candidate can write Calculate stock and pass down to Card and Overlay
// Should not be done within each component
const calculateStock = values => {
  return values.reduce((a, b) => a + b.stock, 0);
};

export default function App() {
  const [data, setData] = useState([]);
  const [activeItem, setActiveItem] = useState({}); // Must be empty object. Should not change to null or undefined

  // Candidate would fetch this data
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch(endpoint);
      const data = await result.json();
      setData(data);
    };
    fetchProducts();
  }, []);

  // Candidate set active element by passing function down
  const handleClose = () => {
    setActiveItem({});
  };

  return (
    <div className="App" data-testid="main-app">
      {!data ? <h2>Loading...</h2> : <main className="products">
        <h2 data-testid="product-title">Products Available: {data.length}</h2>
        <ul className="product-list" data-testid="product-list">
          {data.map(item => (
            <li key={item.id} className="product-item">
              <Card
                thumbnail={item.image.uri}
                name={item.productName}
                price={item.productDetails.price}
                department={item.department}
                category={item.productDetails.category}
                stock={calculateStock(item.availability)}
                handleSetActive={() => setActiveItem(item)}
              />
            </li>
          ))}
        </ul>
      </main>}
      {Object.keys(activeItem).length ? (
        <Overlay
          image={activeItem.image.uri}
          productName={activeItem.productName}
          price={activeItem.productDetails.price}
          stock={calculateStock(activeItem.availability)}
          availability={activeItem.availability}
          handleClose={handleClose}
        />
      ) : null}
    </div>
  );
}
