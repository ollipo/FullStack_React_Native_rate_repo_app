import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';

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

const SignInForm = ({ onSubmit }) => {
    return (
      <View>
        <FormikTextInput name="username" placeholder="Username" testID="usernameField"/>
        <FormikTextInput secureTextEntry name="password" placeholder="Password" testID="passwordField"/>
        <Pressable onPress={onSubmit} testID="submitButton">
          <Text style={styles.textField}>
            Sign In
          </Text>
        </Pressable>
      </View>
    );
  };

export default SignInForm;