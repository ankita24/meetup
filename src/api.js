import axios from 'axios';

export function register(data) {
  return axios.post('/user/register', data);
}

export function login(data) {
  return axios.post('/user/login', data);
}

export function userInfo() {
  return axios.get('/user');
}

export function fetchList() {
  return axios.get('/list?page=20');
}

export function fetchGroupInfo(urlname) {
  return axios.get(`/list/${urlname}`);
}
