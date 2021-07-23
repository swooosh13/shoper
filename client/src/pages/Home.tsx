import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Categories, Item } from '../components/index';
import * as actions from "../redux/actions/filters";
import { useAppSelector } from "../redux/hooks";
import { fetchItems } from "../redux/thunks/items";
import { categoryNames } from "../redux/utils";

const Home = () => {
  const dispatch = useDispatch();
  const { items, isLoaded } = useAppSelector(({ items }) => items);
  const { category, sortBy } = useAppSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchItems(sortBy, category));
  }, [category, sortBy, dispatch]);

  const onSelectCategory = useCallback((index) => {
    dispatch(actions.setCategory(index));
  }, []);

  return (
    <>
      <div className="content__main page">
        <div className="home__categories">
          <Categories
            activeCategory={category}
            onClickCategory={onSelectCategory}
            items={categoryNames} />
        </div>
        <div className="home__items">
          {
            isLoaded
              ? items.map((obj) => (
                <Link to={`/item/${obj.id}`} key={obj.id}>
                  <Item
                    {...obj}
                  />
                </Link>

              ))
              : null
          }
        </div>
      </div>
    </>
  )
}


export {
  Home
};
