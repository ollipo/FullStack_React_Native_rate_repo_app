import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import theme from '../theme';

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
  name: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="name" placeholder="Username"/>
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
  name: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
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