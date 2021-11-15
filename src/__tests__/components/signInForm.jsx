import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';

import SignInForm from '../../components/SignInForm';

describe('SignIn', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();

      const initialValues = {
        username: '',
        password: '',
      };

      const { getByTestId } = render(
        <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
      );
  
      fireEvent.changeText(getByTestId('usernameField'), 'kalle');
      fireEvent.changeText(getByTestId('passwordField'), 'password');
      fireEvent.press(getByTestId('submitButton'));
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
  
      // onSubmit.mock.calls[0][0] contains the first argument of the first call
        expect(onSubmit.mock.calls[0][0]).toEqual({
            username: 'kalle',
            password: 'password',
        });
      });
      
    });
  });