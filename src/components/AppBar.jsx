import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

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
  }
});

const AppBar = () => {
  return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to='/' style={styles.tabItem} component={AppBarTab}>Repositories</Link>
          <Link to='/signIn' style={styles.tabItem} component={AppBarTab}>Sign in</Link>
        </ScrollView>
      </View>
    
  );
};

export default AppBar;