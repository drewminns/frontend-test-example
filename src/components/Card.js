import React from "react";

export const Card = ({
  thumbnail,
  name,
  department,
  category,
  price,
  handleSetActive,
  stock = 0
}) => (
  <div className="product-content">
    <div className="product-image">
      <img src={thumbnail} alt={name} />
    </div>
    <div className="product-details">
      <p className="tag">
        {department} | {category}
      </p>
      <p>${price}</p>
      <p>
        {name} - <span className="pill">{stock}</span>
      </p>
    </div>
    <button className="product-item-button" onClick={handleSetActive}>
      View More Info
    </button>
  </div>
);
