import clsx from "clsx";
import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { CircleArrowDown, Search } from "lucide-react";
import CartButton from "@/components/cart/CartButton";

const Header = () => {
  return (
    <div className={clsx(styles.headerContainer)}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="logo" />
        <div className={styles.sloganContainer}>
          <span>Delivery in 15min</span>
          <div className={styles.locationSelector}>
            <span>Select location Here</span>
            <div className={styles.downArrow}>
              <CircleArrowDown />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.searchBar}>
        <div className={styles.searchLogo}>
          <Search />
        </div>
        <input
          type="text"
          name="searchBar"
          id="itemSearch"
          placeholder="Search your item here"
        />
      </div>
      <div className={styles.cartButton}>
        <CartButton />
      </div>
    </div>
  );
};

export default Header;