import React from 'react'
import styles from "./cardButton.module.scss";
import { ShoppingCart } from 'lucide-react';

const CartButton = () => {
  return (
    <button className={styles.buttonContainer}>
      <ShoppingCart />
      <div className={styles.slogan}>My Cart</div>
    </button>
  );
}

export default CartButton;