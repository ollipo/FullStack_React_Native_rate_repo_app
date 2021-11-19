import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = ( sortValues, variables ) => {
  console.log('sortValues in userepositories: ', sortValues);
  console.log('variables in userepositories: ', variables);
  const [repositories, setRepositories] = useState();
  const { data, loading, fetchMore, ...result } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: sortValues,
    ...variables,
  });

  console.log('data in useRepos: ', data);
  console.log('data.repositories.pageInfo.endCursor', data?.repositories.pageInfo.endCursor);

  const fetchRepositories = async () => {
    setRepositories(data.repositories);
  };

  useEffect(() => {
    if(data){
        fetchRepositories();
    }
  }, [data]);

  const handleFetchMore = () => {
    console.log('handleFetchMore');
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    console.log('canFetchMore', canFetchMore);

    if (!canFetchMore) {
      return;
    }
    console.log('fetches more repos');

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