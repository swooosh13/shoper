import React from "react";
import {Nullable} from "../redux/types";

type CategoriesType = {
  activeCategory: Nullable<number>;
  items?: string[];
  onClickCategory: (index: Nullable<number>) => void;
}

const Categories = React.memo(({activeCategory, onClickCategory, items}: CategoriesType) => {
  return (<div className={"categories"}>
    <ul>
      <li
        className={activeCategory === null ? 'category--is-active' : ''}
        onClick={() => onClickCategory(null)}>
        all
      </li>
      {
        items && items.map((name, index) => (
          <li
            className={activeCategory === index ? 'category--is-active' : ''}
            key={`${name}_${index}`}
            onClick={() => onClickCategory(index)}>
            {name}</li>
        ))
      }
    </ul>
  </div>)
});

export {
  Categories
};
