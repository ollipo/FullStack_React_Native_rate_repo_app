import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  textField: {
    width: '85%',
    borderWidth: 1,
    backgroundColor: theme.colors.primary,
    alignSelf: 'center', 
    borderRadius: 5,
    overflow: 'hidden',
    padding: 4,
    margin: 4,
    color: 'white',
    textAlign: 'center'
  }
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username"/>
      <FormikTextInput secureTextEntry name="password" placeholder="Password"/>
      <Pressable onPress={onSubmit}>
        <Text style={styles.textField}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
      console.log('token: ', await authStorage.getAccessToken());
        
      history.push("/");
      
      //console.log(tokenRemoved);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;