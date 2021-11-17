import React, { useState, useEffect } from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [ sortBy, setSortBy ] = useState('');
  const [ sortValues, setSortValues ] = useState({});
  
  console.log('sortBy in repoLList: ', sortBy);
  console.log('sortValues in repoLList: ', sortValues);

  useEffect(() => {
    console.log('in repolist useeffect: sortBy', sortBy);
    switch (sortBy) {
      case 'latest':
        setSortValues({
          "orderBy": "CREATED_AT",
          "orderDirection": "DESC"
        });
        break;
      case 'highest':
        setSortValues({
          "orderBy": "RATING_AVERAGE",
          "orderDirection": "DESC"
      });
        break;
      case 'lowest':
        setSortValues({
          "orderBy": "RATING_AVERAGE",
          "orderDirection": "ASC"
      });
        break;
    }
  }, [sortBy]);

  
  const { repositories } = useRepositories(sortValues);


  return <RepositoryListContainer repositories={repositories} setSortBy={setSortBy} />;
};

export default RepositoryList;