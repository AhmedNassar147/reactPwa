import axios from 'axios';
const url = 'http://localhost:3000/api';

export const requestGetUsers = async () => {
  const res = await axios.get(`${url}/users`);
  return res;
};

export const selectUserById = async (id) => {
  const res = await axios.get(`${url}/users/${id}`);
  return res;
};

export const requestUpdateSelectedUser = async (userData) => {
  const res = await axios.put(`${url}/users/${userData.id}`, { ...userData });
  return res;
};
