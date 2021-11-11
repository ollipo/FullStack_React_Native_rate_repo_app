import React from 'react';
import { View } from 'react-native';

import Text from './Text';
import theme from '../theme';


const RepoInfo = ({ item }) => {
  return (
        <View style={theme.repoInfo}>
            <Text fontWeight='bold'>{item.fullName}</Text>
            <Text fontSize={theme.fontSizes.body}>{item.description}</Text>
            <Text style={{color: 'white', backgroundColor: theme.colors.primary, alignSelf: 'flex-start', borderRadius: 5, padding: 4}}>
              {item.language}
            </Text>
        </View>
  );
};

export default RepoInfo;