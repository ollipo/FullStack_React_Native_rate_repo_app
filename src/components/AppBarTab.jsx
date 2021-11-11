import React from 'react';
import { View, Pressable, Text } from 'react-native';

const AppBarTab = ({ children, ...props }) => {
    
  return <View>
            <Pressable {...props}>
                <Text style={{ color: 'white', fontSize: 14, fontWeight: '500', padding: 10}}>
                  {children}
                </Text>
            </Pressable>
        </View>;
};

export default AppBarTab;