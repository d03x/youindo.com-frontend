import { Button, NavCategory } from "@fluentui/react-components";
import styles from "./styles/category-list.module.scss";
import { List24Regular } from "@fluentui/react-icons";
import { MenuItem } from "~/features/sidebar";
import { Link } from "react-router";
import classNames from "classnames";
export default function CategoryList() {
  const categories = [
    "Dhot Design",
    "Sports",
    "Gaming",
    "News",
    "Entertainment",
    "Education",
    "Cooking",
  ];

  return (
     <div className={styles.category_container}>
      <div className={styles.category_list}>
        <div className={styles.category_lists}>
          {categories.map((category, index) => (
            <div key={index} className={classNames(styles.category_lists__item,index === 0 && styles.category_lists__item_active)}>
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
