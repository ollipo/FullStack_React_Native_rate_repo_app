import React from 'react';
import { View } from 'react-native';
import { Route, Switch } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';

const Main = () => {
  return (
    <View>
      <AppBar/>
      <Switch >
        <Route exact path="/" >
          <RepositoryList />
        </Route>
        <Route exact path="/signIn" >
          <SignIn />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;