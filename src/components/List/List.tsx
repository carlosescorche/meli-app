import React from "react";
import styles from "./List.module.scss";

import Item from "../Item";
import Alert from "src/components/Alert";

type ListProps = {
  items: ItemInterface[];
};

export const List: React.FC<ListProps> = ({ items }) => {
  if (items.length > 0) {
    return (
      <div className={styles.list}>
        {items.map((i, k) => (
          <Item key={k} item={i} />
        ))}
      </div>
    );
  }

  return <Alert type="info" message="No hay información para mostrar."></Alert>;
};
