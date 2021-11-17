import { Platform } from 'react-native';
import Constants from 'expo-constants';

const theme = {
    container: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#e1e4e8',
    },
    tabItem: {
      flexGrow: 0,
      alignItems: 'flex-end'
    },
    repoItem: {
      backgroundColor: 'white',
      display: 'flex',
      flexWrap: 'no-wrap'
    },
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#0772eb',
      primary:  '#0366d6',
      appBar: '#ffffff'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }),
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    avatar: {
      flexGrow: 0,
      margin: 10,
      width: 50,
      height: 50,
      borderRadius: 5
    },
    repoInfo: {
      flex: 0.1,
      margin: 10
    },
    avatarAndRepoInfo: {
      display: 'flex',
      flexDirection: 'row',
      maxWidth: '85%'
    },
    repoStats: {
      display: 'flex',
      flexGrow: 0,
      margin: 10,
      justifyContent: 'space-around',
      flexDirection: 'row',
      maxWidth: '85%'
    }
  };
  
  export default theme;