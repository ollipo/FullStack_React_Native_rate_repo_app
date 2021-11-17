import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import useSignUp from '../hooks/useSignUp';
import SignUpForm from './SignUpForm';



const initialValues = {
  username: '',
  password: '',
  confirmpassword: ''
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(1)
        .max(30)
        .required('Username is required'),
    password: yup
        .string()
        .min(5)
        .max(50)
        .required('Password is required'),
    confirmpassword: yup
        .string()
        .oneOf([yup.ref('password')],'Password does not match')
        .required('Password confirmation is required')
});

const SignUp = () => {
  const [signUp] = useSignUp();
  const history = useHistory();

  const onSubmit = async (values) => {
      console.log('values in onSubmit: ', values);
    const { username, password } = values;
    try {
      await signUp({ username, password });
        
      history.push("/");
      
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
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;