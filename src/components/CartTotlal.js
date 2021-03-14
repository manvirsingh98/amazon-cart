import React from "react";
import "./CartTotal.css";
import NumberFormat from "react-number-format";

const CartTotlal = ({ items }) => {
  const getTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  // const getTotalItems = () => {
  //   return items
  //     .map((item) => item.quantity)
  //     .reduce((prev, next) => prev + next);

  //   // });
  //   // return totalItems;
  // };

  return (
    <div className="CartTotal">
      <h3>
        Subtotal({items.length} items)
        <span className="cartTotal-price">
          <NumberFormat
            value={getTotalPrice()}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        </span>
      </h3>
      <button>Proceed to chckout</button>
    </div>
  );
};

export default CartTotlal;
