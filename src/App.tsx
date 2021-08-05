import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Voters from './components/Voters/Voters'
import Layout from './components/Layout';
import UserProfile from './components/UserProfile/UserProfile';
import AuthPage from './screens/AuthPage';
import {RootState} from './store/store'


function App() 
{
  const authCtx = {isLoggedIn: false}
  const authToken = useSelector<RootState>(state => state.authentication.token);

  if(authToken === '')
    authCtx.isLoggedIn = false;
  else
    authCtx.isLoggedIn = true;

  return (
    <Layout>
    <Switch>

      {!authCtx.isLoggedIn && (
        <Route path='/auth'>
          <AuthPage />
        </Route>
      )} 

     {authCtx.isLoggedIn && (
            <Route path='/voters'>
              <Voters />
            </Route>
          )}
          
      <Route path='/profile'>
        {authCtx.isLoggedIn && <UserProfile />}
        {!authCtx.isLoggedIn && <Redirect to='/auth' />}        
      </Route>

      <Route path='*'> 
        {!authCtx.isLoggedIn && <Redirect to='/auth'/>  }
        {authCtx.isLoggedIn && <Redirect to='/voters'/>  }
        
      </Route>
    </Switch>
  
  </Layout>
);
}

export default App;
