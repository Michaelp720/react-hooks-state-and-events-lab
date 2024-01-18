import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function toggleInCart(){
    setInCart(!inCart)
  }

  const listClass = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Add To Cart" : "Remove From Cart"

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {(toggleInCart)}>{buttonText}</button>
    </li>
  );
}

export default Item;
