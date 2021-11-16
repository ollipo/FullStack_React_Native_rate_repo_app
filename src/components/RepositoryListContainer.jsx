import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import RepositoryRouteItem from './RepositoryRouteItem';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
  const ItemSeparator = () => <View style={styles.separator} />;
  
  const RepositoryListContainer = ({ repositories }) => {
    const id = useParams().id;
    console.log('id: ', id);
    // Get the nodes from the edges array
    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];

      const routeRepo = repositoryNodes.find(n => n.id === id);
      console.log('routeRepo: ', routeRepo);

      if(routeRepo) {
        return (         
              <RepositoryRouteItem
                key={routeRepo.id}
                item={routeRepo}
              />
        );
      }

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