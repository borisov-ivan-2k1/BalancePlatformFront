import { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
  StartPage,
  ShopPage,
  GroupsPage,
  UsersPage,
  UsersRatingPage,
  UserPage,
  DashPage,
  GroupPage
} from 'pages';
import { Layout } from 'antd';
import { Header, Menu, Content } from 'components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initUser } from 'redux/auth/actions';

const debugAuth = true;

const App = ({ isAuth, initUser }) => {

  useEffect(() => {
    initUser();
  }, [isAuth])

  return (
    <div className="App">
      { isAuth ? <Redirect to='/dash' /> : <Redirect to='/' /> }

      {
        isAuth ?
          <Layout>
            <Menu />
            <Layout>
              <Header />
              <Content>
                <Switch>
                  <Route path='/dash' exact component={DashPage} />
                  <Route path='/shop' exact component={ShopPage} />
                  <Route path='/groups' exact component={GroupsPage} />
                  <Route path='/users' exact component={UsersPage} />
                  <Route path='/rating' exact component={UsersRatingPage} />
                  <Route path='/user/:id' component={UserPage} />
                  <Route path='/group/:id' component={GroupPage} />
                </Switch>
              </Content>
            </Layout>
          </Layout> :
          <StartPage />
      }
    </div>
  );
}

export default connect(
  ({ auth }) => ({ isAuth: auth.isAuth }), dispatch => bindActionCreators({ initUser }, dispatch)
  )(App)
