import axios from 'axios';


const axiosApiInstance = axios.create({
    withCredentials:true,
});

axiosApiInstance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 

  axiosApiInstance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default axiosApiInstance;