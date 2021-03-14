import React from "react";
import "./CartItem.css";

const CartItem = ({ index, item, changeItemQuantity, deleteItem }) => {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img alt="" src={process.env.PUBLIC_URL + "/items/" + item.image} />
      </div>
      <div className="CartItem-info">
        <div className="info-title">
          <h2>{item.title}</h2>
        </div>
        <div className="info-stock">{item.stock}</div>
        <div className="item-actions">
          <div className="item-quantity">
            <select
              value={item.quantity}
              onChange={(e) => changeItemQuantity(e, index)}
            >
              <option value="1">Qtyt: 1</option>
              <option value="2">Qtyt: 2</option>
              <option value="3">Qtyt: 3</option>
            </select>
          </div>
          <div className="item-actions-divider">|</div>
          <div className="item-delete" onClick={() => deleteItem(index)}>
            Delete
          </div>
        </div>
      </div>
      <div className="cartItem-price">${item.price}</div>
    </div>
  );
};

export default CartItem;
