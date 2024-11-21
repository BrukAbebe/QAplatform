import { loginApi, signupApi } from '../api/authApi';

export const loginUser = async (email, password) => {
  try {
    const data = await loginApi(email, password);
    return data;  
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong with login.');
  }
};

export const signupUser = async (userData) => {
  try {
    const data = await signupApi(userData);
    return data;  
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong with signup.');
  }
};
