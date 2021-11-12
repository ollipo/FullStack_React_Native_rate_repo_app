import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { data, loading } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
    });

  const fetchRepositories = async () => {
    setRepositories(data);
  };

  useEffect(() => {
    if(data){
        fetchRepositories();
    }
  }, [data]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;