import React from 'react';
import { View } from 'react-native';

import Text from './Text';
import theme from '../theme';


const RepoStats = ({ item }) => {
    const count = ( count ) => {
        if(count >= 1000) {
            return `${(count/1000).toFixed(1)}k`;
        }
        return count;
    };
  return (
        <View style={theme.repoStats}>
            <View>
                <Text testID="stars" fontWeight='bold'>{count(item.stargazersCount)}</Text>
                <Text>Stars</Text>
            </View>
            <View>
                <Text testID="forks" fontWeight='bold'>{count(item.forksCount)}</Text>
                <Text>Forks</Text>
            </View>
            <View>
                <Text testID="reviews" fontWeight='bold'>{count(item.reviewCount)}</Text>
                <Text>Reviews</Text>
            </View>
            <View>
                <Text testID="rating" fontWeight='bold'>{count(item.ratingAverage)}</Text>
                <Text>Rating</Text>
            </View>
        </View>
  );
};

export default RepoStats;