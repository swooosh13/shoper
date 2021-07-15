type ItemType = {
  i?: number;
}

const Item = ({i}: ItemType) => {
  return (
    <div className="item">
      <img width={90} height={90} src={`/img/items/${i}.jpg`} alt="" className="item__img" />
    </div>
  )
}

export {
  Item
};
