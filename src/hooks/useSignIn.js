import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';

//import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  //const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);
  
  const signIn = async ({ username, password }) => {
    const payload = await mutate({ variables: { username, password }});
    return payload;
  };
  
  return [signIn, result];
  };

export default useSignIn;