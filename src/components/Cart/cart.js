import React from "react";
import "./stile.scss";

const Cart = ({ item }) => {
  return (
    <div className="container">
      <div className="count">
        <div className="imeg">
          <img src={item?.sprites?.back_default} alt="amg" />
        </div>
        <h3>{item?.name}</h3>
      </div>
    </div>
  );
};

export default Cart;
