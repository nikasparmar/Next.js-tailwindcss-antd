import config from '../config/index';
import axiosApiInstance from '../lib/axios-interceptior';

export const getuser = async (requestData) => {
  const data = await axiosApiInstance.get(`${config.API_URL}/api`);
  return [];
};
