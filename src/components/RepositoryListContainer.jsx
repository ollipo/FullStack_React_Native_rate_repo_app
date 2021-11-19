import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import RepositoryRouteItem from './RepositoryRouteItem';
import SortingMenu from './SortingMenu';
import RepositoryFilterInput from './RepositoryFilterInput';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
  const ItemSeparator = () => <View style={styles.separator} />;
  
  const RepositoryListContainer = ({
    onEndReach, 
    repositories, 
    setSortBy,
    setKeyword
  }) => {

    const id = useParams().id;

    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];


      const routeRepo = repositoryNodes?.find(n => n.id === id);

      const renderHeader = () => {
        return (
          <View>
            <RepositoryFilterInput setKeyword={setKeyword}/>
            <SortingMenu setSortBy={setSortBy} />
          </View>
        );
      };
  
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
          ListHeaderComponent={renderHeader()}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
        />
      );
  };

export default RepositoryListContainer;