import React from 'react';
import { View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import Review from './Review';

const Main = () => {
  console.log('main');
  return (
    <View>
      <AppBar/>
      <Switch >
        <Route exact path="/" component={RepositoryList} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/reviewForm" component={Review} />
        <Route path="/:id" component={RepositoryList} />
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;