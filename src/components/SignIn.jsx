import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik, useField } from 'formik';

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
  const [nameField, nameMeta, nameHelpers] = useField('name');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');

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

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;