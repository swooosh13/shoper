import { ItemType } from "../redux/types";


const Item = (props: ItemType) => {

  return (
    <div className="item">
      <img width={90} height={90} src={props.images[0]} alt="" className="item__img" />
    </div>
  )
}

export {
  Item
};
