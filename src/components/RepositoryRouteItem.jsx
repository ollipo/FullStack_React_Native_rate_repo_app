import { useQuery } from '@apollo/client';
import React from 'react';
import { Pressable, View, Text,/* , Linking */ 
Linking} from 'react-native';
import { REPOSITORY } from '../graphql/queries';

import theme from '../theme';
import Avatar from './Avatar';
import RepoInfo from './RepoInfo';
import RepoStats from './RepoStats';

const RepositoryRouteItem = ({ item }) => {
    const { data } = useQuery(REPOSITORY, { variables: { id: item.id }});

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
          <Pressable onPress= {() => Linking.openURL(data ? data.repository.url : null) }>
              <Text style={{
                  color: 'white', 
                  backgroundColor: theme.colors.primary, 
                  alignSelf: 'center',
                  flexGrow: 1,
                  borderRadius: 5, 
                  padding: 4
                }}>
                  Open in GitHub
                </Text>
            </Pressable>
        </View>
      </View>
  );
};

export default RepositoryRouteItem;