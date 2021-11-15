import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
  const ItemSeparator = () => <View style={styles.separator} />;
  
  const RepositoryListContainer = ({ repositories }) => {
  
    // Get the nodes from the edges array
    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];
  
      return (
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <RepositoryItem item={item} />
          )}
        />
      );
  };

export default RepositoryListContainer;