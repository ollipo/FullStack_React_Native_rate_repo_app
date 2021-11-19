import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../graphql/mutations';
import useSignIn from '../hooks/useSignIn';

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);
  const [signIn] = useSignIn();
  
  const signUp = async ({ username, password }) => {
    await mutate({ variables: { username, password }});
    try {
        await signIn({ username, password });
          
        history.push("/");
        
      } catch (e) {
        console.log(e);
      }
    };

  return [signUp, result];
  };

export default useSignUp;
