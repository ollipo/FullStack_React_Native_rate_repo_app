import React from 'react';
import { View, Text } from 'react-native';


const RepositoryList = ({ item }) => {
  return (
    <View>
        <Text>Full name: {item.fullName}</Text>
        <Text>Description: {item.description}</Text>
        <Text>Language: {item.language}</Text>
        <Text>Starts: {item.stargazersCount}</Text>
        <Text>Forks: {item.forksCount}</Text>
        <Text>Reviews: {item.reviewCount}</Text>
        <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryList;