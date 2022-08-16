import React from "react";

import "./Card.css";

function Card() {
  const items = [
    {
      title: ".COM",
      price: "$5.99/yr",
      text: "Instead of $10.99/yr",
    },
    {
      title: ".AI",
      price: "$55.99/yr",
      text: "Instead of $10.99/yr",
    },
    {
      title: ".NET",
      price: "$7.99/yr",
      text: "Instead of $10.99/yr",
    },
    {
      title: ".HEALTH",
      price: "$7.99/yr",
      text: "Instead of $10.99/yr",
    },
    {
      title: ".CO.UK",
      price: "$3.99/yr",
      text: "Instead of $10.99/yr",
    },
    {
      title: ".ORG",
      price: "$15.99/yr",
      text: "Instead of $10.99/yr",
    },
    {
      title: ".CO",
      price: "$26.33/yr",
      text: "Instead of $10.99/yr",
    },
    {
      title: ".SEA",
      price: "$16.33/yr",
      text: "Instead of $10.99/yr",
    },
  ];

  return (
    <div>
      <div className="container">
        {items.map((item) => (
          <div className="card">
            <h2 className="title">{item.title}</h2>
            <p className="price">{item.price}</p>
            <p className="text">{item.text}</p>
            <button className="btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
