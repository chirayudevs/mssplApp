import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

let headers = {};

const axiosInstance = axios.create({
  baseURL: '',
  headers
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      console.log('test token');
    }
    return config;
  },
  () => {

  }
);

axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if(!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }

    if (error.response.status === 403) {
      navigate(LOGOUT, {tokenExpired: true});
    } else {
      return new Promise((resolve, reject) => {
        reject(error)
      });
    }
  },
);

export default axiosInstance;
