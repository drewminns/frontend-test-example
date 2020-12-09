import React from "react";

export const Overlay = ({
  productName,
  price,
  image,
  availability,
  stock,
  handleClose
}) => (
  <div className="overlay">
    <div className="overlay-content">
      <h2>{productName}</h2>
      <img src={image} alt={productName} />
      <p>${price}</p>
      <p>Stock Available: {stock}</p>
      <h3>Availability</h3>
      <ul className="product">
        {availability.map(location => (
          <li key={location.city}>
            <p className="pill">{location.stock}</p>
            <address>
              {location.city}
              <br />
              {location.address}
              <br />
              {location.region}
            </address>
            <p>
              <a href={`tel:${location.contactNumber}`}>
                {location.contactNumber}
              </a>
            </p>
          </li>
        ))}
      </ul>
      <button onClick={handleClose} className="overlay-close">
        <span role="img" aria-label="Close Overlay">
          ️✖
        </span>
      </button>
    </div>
  </div>
);
