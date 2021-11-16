import React from 'react';
import { Pressable, View } from 'react-native';
import { useHistory } from 'react-router';

import theme from '../theme';
import Avatar from './Avatar';
import RepoInfo from './RepoInfo';
import RepoStats from './RepoStats';

const RepositoryItem = ({ item }) => {
  const history = useHistory();
  return (
    <Pressable onPress= {() => history.push(`/${item.id}`)} >
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
        </View>
      </View>
    </Pressable>
    
    
  );
};

export default RepositoryItem;