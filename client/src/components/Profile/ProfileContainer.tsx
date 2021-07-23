import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';
import { LikedItem } from '../../redux/types';
import { getItemProfile } from '../../redux/thunks/items';
import * as actions from '../../redux/actions/likes';
import Profile from './Profile';

type PathParmasType = {
  itemId: string;
}

type PropsType = RouteComponentProps<PathParmasType>;

const ProfileContainer = (props: PropsType) => {
  const dispatch = useDispatch();
  let itemProfile: any = useAppSelector(({ items }) => items.itemProfile);

  const handleAddItemToLikes = (obj: LikedItem) => {
    dispatch(actions.addToLikes(obj));
  }

  useEffect(() => {
    let itemId: number | null = +props.match.params.itemId;
    if (!itemId) {
      <Redirect to="/home" />
      console.log("ID should exists in URI params");
    } else {
      dispatch(getItemProfile(itemId));
    }

  }, []);

  return (
    <>
      <Profile {...props} itemProfile={itemProfile} onClickAddItem={handleAddItemToLikes} />
    </>
  )
}

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export {
  ProfileContainerWithRouter as ProfileContainer
};
