import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = ( sortValues, variables ) => {
  const [repositories, setRepositories] = useState();
  const { data, loading, fetchMore, ...result } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: sortValues,
    ...variables,
  });

  const fetchRepositories = async () => {
    setRepositories(data.repositories);
  };

  useEffect(() => {
    if(data){
        fetchRepositories();
    }
  }, [data]);

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };


  return { 
    fetchMore: handleFetchMore,
    loading,
    ...result,
    repositories, 
    refetch: fetchRepositories 
  };
};

export default useRepositories;