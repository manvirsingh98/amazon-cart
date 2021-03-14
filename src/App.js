import React, { useState } from "react";
import "./App.css";

import Header from "./Header";
import CardItems from "./components/CartItems";
import CartTotlal from "./components/CartTotlal";

import data from "./Data";

function App() {
  const [cartItems, setCartItems] = useState(data);

  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <div className="App-main">
        <CardItems items={cartItems} setCartItems={setCartItems} />
        <CartTotlal items={cartItems} />
      </div>
    </div>
  );
}

export default App;
