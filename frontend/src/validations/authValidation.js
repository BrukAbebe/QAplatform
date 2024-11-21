import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
    .max(255, 'Email must be less than 255 characters'), 
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export const signupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .trim()
    .max(50, 'First name must be less than 50 characters'), 
  lastName: Yup.string()
    .required('Last name is required')
    .trim()
    .max(50, 'Last name must be less than 50 characters'), 
  username: Yup.string()
    .required('Username is required')
    .trim()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be less than 30 characters'), 
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
    .max(255, 'Email must be less than 255 characters'), 
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
    .trim(),
});
