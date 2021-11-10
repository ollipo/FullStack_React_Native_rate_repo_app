import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

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
    <View>
<View style={styles.container}>
      <AppBarTab text='Repositories' style={styles.tabItem}/>
      <AppBarTab text='Sign In' style={styles.tabItem}/>
    </View>
    </View>
    
  );
};

export default AppBar;