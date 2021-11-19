import React, { useState, useEffect } from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [ sortBy, setSortBy ] = useState('');
  const [ sortValues, setSortValues ] = useState({});
  const [ keyword, setKeyword ] = useState('');

  useEffect(() => {
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

  
  const { repositories, fetchMore } = useRepositories({...sortValues, keyword});

  const onEndReach = () => {
    console.log('reached the end');
    fetchMore();
  };

  return <RepositoryListContainer 
            repositories={repositories} 
            setSortBy={setSortBy}
            setKeyword={setKeyword}
            onEndReach={onEndReach}
          />;
};

export default RepositoryList;