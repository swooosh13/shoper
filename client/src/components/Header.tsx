type HeaderType = {
  path?: string[];
  type?: 'home' |  'about' | null;
}

const Header = ({path = [''], type = 'home'}: HeaderType) => {
  const isAbout = type === 'about' ? true : false;

  return (
    <div className="body__header header">
      <div className={isAbout ? "navigation-info--about" :"navigation-info"}>
        <span>home {'>'} <b>shop</b></span>
      </div>
      <div className={"header__search-panel"}>
        <div className="search-btn">
          <img src="/img/btn-search.svg" alt="" />
        </div>
        <div className="heart-btn">
          <img src="/img/heart.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export {
  Header
};
