import axios from 'axios';
import {API_URL} from '../../config';

export const register = (name, surname, email, password) => async (
  dispatch
) => {
  await axios.post(`${API_URL}/user/register`, {
    name,
    surname,
    email,
    password,
  });
  return dispatch({type: 'REGISTER'});
};

export const auth = (token) => async (dispatch) => {
  try {
    const {data} = await axios.post('http://localhost:2222/user/auth', {
      token,
    });
    return dispatch({type: 'AUTH', payload: data});
  } catch ({response: {data, status}}) {
    console.log(data);
  }
};

export const login = (email, password) => async (dispatch) =>
  new Promise(async (resolve, reject) => {
    try {
      const {
        data: {user, token},
      } = await axios.post(`${API_URL}/user/login`, {
        email,
        password,
      });
      localStorage.setItem('jwt', token);
      return dispatch({type: 'LOGIN', payload: user});
    } catch (error) {
      reject(error);
    }
  });
