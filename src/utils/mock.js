import axios from 'axios';
const requests = axios.create({
  baseURL: '/mock',
  timeout: 5000,
});
requests.interceptors.request.use(config =>
  config
);
requests.interceptors.response.use(
  res => res.data,
  err => Promise.reject(new Error(err.message))
);
export default requests;