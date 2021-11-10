import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: '#d73a4a',
    marginLeft: 30
  },
  textField: {
    width: '85%',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    alignSelf: 'center', 
    borderRadius: 5,
    padding: 4,
    margin: 4
  },
  textFieldError: {
    width: '85%',
    borderWidth: 1,
    borderColor: '#d73a4a',
    alignSelf: 'center', 
    borderRadius: 5,
    padding: 4,
    margin: 4
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  if(!showError) {
    return (
        <>
          <TextInput
            onChangeText={value => helpers.setValue(value)}
            onBlur={() => helpers.setTouched(true)}
            value={field.value}
            error={showError}
            style={styles.textField}
            {...props}
          />
          {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
      );
  }

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.textFieldError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;