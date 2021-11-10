import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
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
      <View style={styles.container}>
        <ScrollView horizontal>
          <AppBarTab text='Repositories' style={styles.tabItem}/>
          <AppBarTab text='Sign in' style={styles.tabItem}/>
        </ScrollView>
      </View>
    
  );
};

export default AppBar;