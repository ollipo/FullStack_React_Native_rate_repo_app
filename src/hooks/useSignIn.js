import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

//import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  //const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  
  const signIn = async ({ username, password }) => {
    const payload = await mutate({ variables: { username, password }});
    const { data } = payload;
    if (data && data.authorize) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
    }
  };
  
  return [signIn, result];
  };

export default useSignIn;