import {Categories, Item} from '../components/index';

let arr: any = Array.from(Array(35).keys());

const categoryNames: any = ['all', 'new', 'shirts', 't-shirts', 'sneakers', 'accessories', 'hoods'];
const sortItems = [
  {name: 'popularity', type: 'popular', order: 'desc'},
  {name: 'price', type: 'prcie', order: 'desc'},
  {name: 'abc', type: 'name', order: 'asc'},
]
const Home = () => {
  return (
    <>
      <div className="body__main home">
        <div className="home__categories">
          <Categories activeCategory={'all'}/>
        </div>
        <div className="home__content">
          {
            arr.map((v: any, i: any) => {
              return <Item key={v + Date.now().toString()} i={v}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export {
  Home
};
