import React from 'react';
import { View, StyleSheet, ScrollView/* , Pressable, Text */ } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_AUTH_USER } from '../graphql/queries';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { useHistory } from 'react-router-native';


import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    backgroundColor: '#24292e',
    flexDirection: 'row'
  },
  tabItem: {
      flexGrow: 0,
      alignItems: 'flex-end'
  },
  textField: {
    width: '85%',
    borderWidth: 1,
    backgroundColor: theme.colors.primary,
    alignSelf: 'center', 
    borderRadius: 5,
    overflow: 'hidden',
    padding: 4,
    margin: 4,
    color: 'white',
    textAlign: 'center'
  }
});


 

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const history = useHistory();
  /* const { data } = authStorage.getAccessToken();
  console.log('appBarToken: ', data); */
  
  const { data } = useQuery(GET_AUTH_USER, {
    fetchPolicy: 'cache-and-network'
    });
  const authorizedUser = data ? data.authorizedUser : undefined;
  console.log('get_auth_user: ', data);
  console.log('get_apolloclient: ', apolloClient);

  const onSignOut = async () => {
    try {
      await authStorage.removeAccessToken();
      apolloClient.resetStore();
      console.log('signouttoken: ', await authStorage.getAccessToken());
      console.log('pushed sign out');
      history.push('/');
      
    } catch (e) {
      console.log(e);
    }
  };

  /* if(authorizedUser) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to='/' style={styles.tabItem} component={AppBarTab}>Repositories</Link>
          <Link to='/signIn' style={styles.tabItem} component={AppBarTab}>Sign in</Link>
        </ScrollView>
      </View>
    
    );
  } */

  return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to="/" component={AppBarTab}>
            Repositories
          </Link>
          {authorizedUser ? (
            <View style={{ flexDirection: 'row'}}>
              <Link to="/reviewForm" component={AppBarTab}>
              Create a review
              </Link>
                <AppBarTab onPress={onSignOut}>Sign out</AppBarTab>
              </View>
          ) : (
            <Link to="/signIn" component={AppBarTab}>
              Sign in
            </Link>
          )}
        </ScrollView>
      </View>
    
  );
};

export default AppBar;