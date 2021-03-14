import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

const CardItems = ({ items, setCartItems }) => {
  const changeItemQuantity = (e, index) => {
    console.log(e.target.value);
    console.log("index is ", index);

    const newItems = [...items];
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  };
  const deleteItem = (indexToDelete) => {
    return setCartItems(
      items.filter((value, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="cartItems-items">
        {items.map((item, index) => {
          return (
            <CartItem
              index={index}
              key={index}
              item={item}
              changeItemQuantity={changeItemQuantity}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardItems;
