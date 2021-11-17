import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = ( sortValues ) => {
  console.log('sortValues: ', sortValues);
  const [repositories, setRepositories] = useState();
  const { data, loading } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: sortValues ? sortValues : null
  });

  const fetchRepositories = async () => {
    setRepositories(data.repositories);
  };

  useEffect(() => {
    if(data){
        fetchRepositories();
    }
  }, [data]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;