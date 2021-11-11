import React from 'react';
import { View } from 'react-native';

import theme from '../theme';
import Avatar from './Avatar';
import RepoInfo from './RepoInfo';
import RepoStats from './RepoStats';


const RepositoryItem = ({ item }) => {
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
      </View>
    </View>
    
  );
};

export default RepositoryItem;