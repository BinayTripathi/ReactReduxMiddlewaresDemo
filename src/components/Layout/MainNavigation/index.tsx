import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from './../../../store/store';
import { fetchAuthActions } from '../../UserAuth/fetch-identity-reducer';

import classes from './index.module.css';

const MainNavigation = () => {
  let isLoggedIn: boolean = false;
  const authToken = useSelector<RootState>(state => state.authentication.token);
  const dispatch = useDispatch();

  if(authToken === '')
    isLoggedIn = false;
  else
    isLoggedIn = true;
  

  const logoutHandler = () => {
    console.log('logging out')
    dispatch(fetchAuthActions.logout());
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;