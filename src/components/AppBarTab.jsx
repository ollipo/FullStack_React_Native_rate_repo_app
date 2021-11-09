import React from 'react';
import { View, Pressable, Text } from 'react-native';

const AppBarTab = ({ text }) => {
  return <View>
            <Pressable>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: '700', padding: 10}}>{text}</Text>
            </Pressable>
        </View>;
};

export default AppBarTab;