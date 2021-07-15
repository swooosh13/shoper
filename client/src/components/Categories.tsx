type CategoriesType = {
  activeCategory?: string;
}

const Categories = ({activeCategory}: CategoriesType) => {
  return <>
    <ul>
      <li>all</li>
      
      <li>new</li>
      <li>shirts</li>
      <li>t-shirts</li>
      <li>sneakers</li>
      <li>accessories</li>
      <li>hoods</li>
    </ul>
  </>
}

export {
  Categories
};
