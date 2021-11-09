import React from 'react';
import { View, Image } from 'react-native';

import theme from '../theme';


const Avatar = ({ source }) => {
  return (
    <View>
        <Image
            style={theme.avatar}
            source={{ uri: source }}
        />
    </View>
  );
};

export default Avatar;