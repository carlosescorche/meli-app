import React from "react";
import styles from "./Product.module.scss";

import Button from "../Button";
import Price from "../Price";
import Alert from "../Alert";

import { formatPrice, formatCondition } from "../../utils";

type ProductProps = {
  item: ExtendedItem | undefined;
};

export const Product: React.FC<ProductProps> = ({ item }) => {
  if (item) {
    return (
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.condition}>
            <span>{formatCondition(item.condition)}</span>
            <span>{item.sold_quantity} Vendidos</span>
          </div>
          <div className={styles.title}>
            <h1>{item.title}</h1>
          </div>
          <div className={styles.price}>
            <Price amount={formatPrice(item.price, 2)} size="m" />
          </div>
          <div className={styles.buttons}>
            <Button onClick={() => {}}>Comprar ahora</Button>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.image}>
            <img src={item.picture} alt={item.title} />
          </div>
          <div className={styles.description}>
            <h2>Descriptión</h2>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    );
  }

  return <Alert type="info" message="Producto no encontrado" />;
};

export default Product;
