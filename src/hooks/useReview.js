import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

//import useAuthStorage from '../hooks/useAuthStorage';

const useReview = () => {
  //const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(CREATE_REVIEW);
  
  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
      console.log('values in createReview: ', ownerName, repositoryName, rating, text);
    const payload = await mutate({ 
        variables: { 
            ownerName: ownerName, 
            repositoryName: repositoryName, 
            rating: Number(rating), 
            text: text 
        }
    });
    console.log('payload in createReview: ', payload);
    return payload;
  };
  
  return [createReview, result];
  };

export default useReview;