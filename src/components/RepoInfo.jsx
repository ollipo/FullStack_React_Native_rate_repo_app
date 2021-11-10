import React from 'react';
import { View } from 'react-native';

import Text from './Text';
import theme from '../theme';


const RepoInfo = ({ item }) => {
  return (
        <View style={theme.repoInfo}>
            <Text fontWeight='bold'>{item.fullName}</Text>
            <Text fontSize={theme.fontSizes.body}>{item.description}</Text>
            <Text style={{overflow: 'hidden', backgroundColor: theme.colors.primary, color: 'white', alignSelf: 'flex-start', borderRadius: 5, padding: 4}}>
              {item.language}
            </Text>
        </View>
  );
};

export default RepoInfo;