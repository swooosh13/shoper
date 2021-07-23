import { useAppSelector } from "../redux/hooks";

type HeaderType = {
  path?: string[];
  type?: 'home' | 'about' | null;
}

const Header = ({ path = [''], type = 'home' }: HeaderType) => {
  const { totalCount } = useAppSelector(({ likes }) => likes);
  const isAbout = type === 'about' ? true : false;

  return (
    <div className="header">
      <div className={isAbout ? "navigation-info--about" : "navigation-info"}>
        <span>home {'>'} <b>shop</b></span>
      </div>
      <div className={"header__search-panel"}>
        <div className="search-btn">
          <img src="/img/btn-search.svg" alt="" />
        </div>
        <div className="header__liked-block">
          {
            !!totalCount && (<span className="header__total-count">{totalCount}</span>)
          }
          <div className="heart-btn">
            <img src="/img/heart.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  Header
};
