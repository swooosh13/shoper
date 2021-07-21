import ReactImageMagnify from "react-image-magnify";
import { Link } from 'react-router-dom';

import { ItemType, LikedItem, Nullable } from "../../redux/types"
import { categoryNames } from '../../redux/utils';


type PropsType = {
  itemProfile: Nullable<ItemType>;
  onClickAddItem: (obj: LikedItem) => void;
}

const Profile = ({ itemProfile, onClickAddItem }: PropsType) => {

  if (!itemProfile) {
    return <div>
      <span>Loading...</span>
    </div>
  }


  const onAddItem = () => {
    const obj = {
      id: itemProfile.id,
      title: itemProfile.title,
      price: itemProfile.priceRUS,
      imgURL: itemProfile.images[0]
    }

    onClickAddItem(obj);
  }

  return (
    <>
      <div className="profile page__profile">
        <div className="profile__img">
          <div className="profile__img--zoom-lens">
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                width: 350,
                height: 350,
                src: itemProfile.images[0],
              },
              largeImage: {
                src: itemProfile.images[0],
                width: 1000,
                height: 1000
              }
            }} />
          </div>
        </div>
        <div className="profile__info info">
          <div className="info__text">
            <h3 className="info__title">{itemProfile.title}</h3>
            <p className="info__description">{itemProfile.description}</p>
          </div>
          <div className="profile__add-block add-block">
            <div>
              <span>CATEGORY: {categoryNames[itemProfile.category]}</span>
            </div>
            <div className="add-block__prices">
              <div className="prcies__row">
                <img src="/img/russian-ruble.svg" alt="ruble" />
                <span className="add-block__prices--rus">{itemProfile.priceRUS}</span>
              </div>
              <div className="prcies__row">
                <img src="/img/dollar-sign.svg" alt="dollar" />
                <span className="add-block__prices--us">{itemProfile.priceUS}</span>
              </div>
            </div>
            <div>
            </div>
            <div className="add-block__buttons">
              <Link to="/home">
                <button className="add-block__buttons--back">back</button>
              </Link>
              <button className="add-block__buttons--add" onClick={onAddItem}>add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;