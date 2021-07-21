import { Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Home } from '../../pages/Home';
import { About } from '../../pages';
import { ProfileContainer } from '../Profile/ProfileContainer';

const Content = () => {

  const routes: Array<any> = [
    { path: '/home', Component: Home },
    { path: '/', Component: Home },
    { path: '/item/:itemId?', Component: ProfileContainer },
    { path: '/about', Component: About },
  ]
  return (
    <div className="content">
      {
        routes.map(({ path, Component }) =>
          <Route key={path} exact path={path} >
            {
              ({ match }) =>
                <CSSTransition
                  classNames="page__home"
                  timeout={500}
                  unmountOnExit
                  mountOnEnter
                  in={match != null}>
                  <Component />
                </CSSTransition>
            }
          </Route>
        )
      }
    </div>
  )
}

export {
  Content
};