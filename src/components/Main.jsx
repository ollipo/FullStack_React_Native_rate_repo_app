import React from 'react';
import { View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';

const Main = () => {
  return (
    <View>
      <AppBar/>
      <Switch>
        <Route exact path="/">
          <RepositoryList />
        </Route>
        <Route path="/Sign in">
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;