import React from 'react';
import { View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Review from './Review';
import MyReviews from './MyReviews';

const Main = () => {
  return (
    <View>
      <AppBar/>
      <Switch >
        <Route exact path="/" component={RepositoryList} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/reviewForm" component={Review} />
        <Route path="/myReviews" component={MyReviews} />
        <Route path="/:id" component={RepositoryList} />
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;