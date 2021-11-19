import { useQuery } from '@apollo/client';
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import format from 'date-fns/format';
import { GET_AUTH_USER } from '../graphql/queries';

import theme from '../theme';
import Text from './Text';

const ReviewItem = ({ review }) => {
    const date = review.node.createdAt;
    const year = date.substring(0, 4);
    const month = date.substring(5, 7)-1;
    const day = date.substring(8, 10);
    var result = format(new Date(year, month, day), 'dd.MM.yyyy');

    return (
            <View style={theme.container}>
            <View style={theme.repoItem}>
                <View style={theme.avatarAndRepoInfo} >
                    <View style={{
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        flexDirection: 'row', 
                        flexGrow: 0,
                        margin: 10,
                        width: 50,
                        height: 50,
                        borderColor: theme.colors.primary,
                        borderWidth: 3,
                        borderRadius: 50 / 2
                    }}>
                        <Text color='primary' fontWeight='bold' >{review.node.rating}</Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexGrow: 0,
                        margin: 10,
                        justifyContent: 'space-around',
                        maxWidth: '85%'
                    }}>
                        <Text fontWeight='bold' >
                            {review.node.user.username}
                        </Text>
                        <Text >
                            {result}
                        </Text>
                        <Text >
                            {review.node.text}
                        </Text>
                    </View>
                </View>
            </View>
            </View>
  );
};

const MyReviews = () => {
    const { data, loading } = useQuery(GET_AUTH_USER, {
        fetchPolicy: 'cache-and-network',
        variables: {includeReviews: true}
        });
      
    const reviews = data ? data.authorizedUser.reviews.edges : undefined;
    
    
    const styles = StyleSheet.create({
        separator: {
          height: 10,
        },
      });
      
      const ItemSeparator = () => <View style={styles.separator} />;

    if(!loading) {
        return (
          <FlatList
              data={reviews}
              renderItem={({ item }) => <ReviewItem review={item} />}
              keyExtractor={(item) => item.node.id}
              ItemSeparatorComponent={ItemSeparator}
          />
        );
    }
    return null;
  
};

export default MyReviews;