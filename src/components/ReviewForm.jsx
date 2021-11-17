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

const ReviewForm = ({ onSubmit }) => {
    return (
      <View>
        <FormikTextInput name="ownerName" placeholder="Repository owner name"/>
        <FormikTextInput name="repositoryName" placeholder="Repository name"/>
        <FormikTextInput name="rating" placeholder="Rating between 0 and 100"/>
        <FormikTextInput multiline name="text" placeholder="Review"/>
        <Pressable onPress={onSubmit}>
          <Text style={styles.textField}>
            Create a review
          </Text>
        </Pressable>
      </View>
    );
  };

export default ReviewForm;