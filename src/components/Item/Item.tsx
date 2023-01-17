import React from "react";

import styles from "./Item.module.scss";
import Price from "../Price";

import { Link } from "react-router-dom";
import { formatCondition, formatPrice } from "../../utils";

type ItemProps = {
  item: ItemInterface;
};

export const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Link to={`/items/${item.id}`} title={item.title}>
          <img src={item.picture} alt={item.title} />
        </Link>
      </div>
      <div className={styles.content}>
        <Price amount={formatPrice(item.price, 0)} free={item.free_shipping} />
        <Link to={`/items/${item.id}`} title={item.title}>
          <h2>{item.title}</h2>
        </Link>
      </div>
      <div className={styles.condition}>{formatCondition(item.condition)}</div>
    </div>
  );
};
