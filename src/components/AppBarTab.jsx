import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { Link } from 'react-router-native';

const AppBarTab = ({ text }) => {
    
  return <View>
            <Pressable>
              <Link to={`/${text}`}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: '700', padding: 10}}>
                  {text}
                </Text>
              </Link>
            </Pressable>
        </View>;
};

export default AppBarTab;