import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    
    backgroundColor: '#24292e'
  },
  tabItem: {
      flexGrow: 0,
      alignItems: 'flex-end'

  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <AppBarTab text='Repositories' style={styles.tabItem}/>
    </View>
  );
};

export default AppBar;