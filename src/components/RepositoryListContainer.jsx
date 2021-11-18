import React, { useEffect, useState } from 'react';
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
  
  const RepositoryListContainer = ({ repositories, setSortBy }) => {
    const [filteredRepos, setFilteredRepos] = useState();
    const [repositoryNodes, setRepositoryNodes] = useState(repositories);
    const id = useParams().id;
    console.log('repositories in container: ', repositories);

    useEffect(() => {
      console.log('repositories in useE in container: ', repositories?.edges?.length);
    console.log('filteredrepositories in useE in container: ', filteredRepos?.repositories.edges?.length);
    console.log(filteredRepos?.repositories.edges.length !== repositories?.edges?.length);
      if(filteredRepos?.repositories.edges.length !== repositories?.edges?.length) {
        console.log('filteredRepos in useEffect; ', filteredRepos);
        const repositoryNodes = filteredRepos?.repositories.edges
          ? filteredRepos.repositories.edges.map(edge => edge.node)
          : [];
      setRepositoryNodes(repositoryNodes);
      } else {
        console.log('repositories in useEffect; ', repositories);
        const repositoryNodes = repositories
          ? repositories.edges.map(edge => edge.node)
          : [];
        setRepositoryNodes(repositoryNodes);
      }
    }, [repositories, filteredRepos]);

    console.log('repositorynodes: ', repositoryNodes);
    console.log('filteredrepositories: ', filteredRepos);

      const routeRepo = repositoryNodes?.find(n => n.id === id);
      console.log('routeRepo: ', routeRepo);

      const renderHeader = () => {
        return (
          <View>
            <RepositoryFilterInput setFilteredRepos={setFilteredRepos}/>
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
        />
      );
  };

export default RepositoryListContainer;