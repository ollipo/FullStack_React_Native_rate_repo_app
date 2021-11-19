import { useQuery } from '@apollo/client';
import React from 'react';
import { Pressable, View, Linking, FlatList, StyleSheet } from 'react-native';
import { REPOSITORY } from '../graphql/queries';
import format from 'date-fns/format';

import theme from '../theme';
import Avatar from './Avatar';
import RepoInfo from './RepoInfo';
import RepoStats from './RepoStats';
import Text from './Text';

const RepositoryInfo = ({ item, data }) => {
    
    console.log('item: ', item);

    return (
        <View style={theme.container}>
          <View style={theme.repoItem}>
            <View style={theme.avatarAndRepoInfo}>
              <View>
                <Avatar source={item.ownerAvatarUrl} />
              </View>
              <View>
                <RepoInfo item={item} />
              </View>
            </View>
              <View>
                <RepoStats item={item} /> 
              </View>
              <Pressable  onPress= {() => Linking.openURL(data ? data.repository.url : null) }>
                  <Text style={{
                      color: 'white', 
                      backgroundColor: theme.colors.primary, 
                      alignSelf: 'center',
                      width: '95%',
                      flexGrow: '1',
                      borderRadius: 5, 
                      padding: 10,
                      textAlign: 'center'
                    }}>
                      Open in GitHub
                    </Text>
                </Pressable>
            </View>
          </View>
      );
  };
  
const ReviewItem = ({ review }) => {
    console.log('review item: ', review);
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

const RepositoryRouteItem = ({ item }) => {
    const { data, loading, fetchMore } = useQuery(REPOSITORY, { 
      fetchPolicy: 'cache-and-network',
      variables: { id: item.id } 
    });
    console.log('data: ', data?.repository.reviews);
    
    const styles = StyleSheet.create({
        separator: {
          height: 10,
        },
      });
      
      const ItemSeparator = () => <View style={styles.separator} />;

      const handleFetchMore = () => {
        console.log('handleFetchMore in repoRouteItem');
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
        console.log('canFetchMore in repoRouteItem', canFetchMore);
    
        if (!canFetchMore) {
          return;
        }
        console.log('fetches more repos in repoRouteItem');
    
        fetchMore({
          variables: {
            after: data.repository.reviews.endCursor
          },
        });
      };

    if(!loading) {
        return (
          <FlatList
              data={data.repository.reviews.edges}
              renderItem={({ item }) => <ReviewItem review={item} />}
              keyExtractor={(item) => item.node.id}
              ItemSeparatorComponent={ItemSeparator}
              ListHeaderComponent={() => <RepositoryInfo item={item} data={data} />}
              onEndReached={() => handleFetchMore}
              onEndReachedThreshold={0.5}
          />
        );
    }
    return null;
  
};

export default RepositoryRouteItem;