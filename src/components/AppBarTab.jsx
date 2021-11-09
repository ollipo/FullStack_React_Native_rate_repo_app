import React from 'react';
import { View, Pressable, Text } from 'react-native';

const AppBarTab = ({ text }) => {
  return <View>
            <Pressable>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '700'}}>{text}</Text>
            </Pressable>
        </View>;
};

export default AppBarTab;