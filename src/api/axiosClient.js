import axios from 'axios';
import queryString from 'query-string';
import { POST_REFRESH_TOKEN } from '../constants/SubUrl';
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

const refreshToken = async (data) => {
  const result = await axios.post(process.env.REACT_APP_API_URL + POST_REFRESH_TOKEN, data);

  return result.data;
};

axiosClient.interceptors.request.use(async (req) => {
  const AccessToken = JSON.parse(localStorage.getItem('access_token'));
  const deviceId = localStorage.getItem('deviceId');
  if (AccessToken) {
    const token = AccessToken.access.token;
    const tokenExpries = AccessToken.access.expires;
    const expires = Number(new Date(tokenExpries));
    const current = Number(new Date());
    const refreshtoken = AccessToken.refresh.token;
    if (expires && expires <= current) {
      const data = {
        refreshToken: refreshtoken,
        deviceId: deviceId,
      };
      const result = await refreshToken(data);
      console.log(result.data);
      localStorage.setItem('access_token', JSON.stringify(result.data));

      req.headers = {
        ...req.headers,
        Authorization: `Bearer ${result.data.access.token}`,
      };
    }
    req.headers = {
      ...req.headers,
      Authorization: `Bearer ${token}`,
    };
    return req;
  }

  return req;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

export default axiosClient;
