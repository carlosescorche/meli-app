import React from "react";
import styles from "./Breadcrumbs.module.scss";

import { Link } from "react-router-dom";

type BreadcrumbsProps = {
  items: string[];
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <ul className={styles.breadcrumbs}>
      {items.map((i, k) => {
        return (
          <li key={k}>
            <Link to="/" title={i}>
              {i}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
