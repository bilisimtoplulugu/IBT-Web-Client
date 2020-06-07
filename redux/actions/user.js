import axios from 'axios';
import {API_URL} from '../../config';

export const register = (name, surname, email, password) => async (
  dispatch
) => {
  try {
    const {
      data: {user, token},
    } = await axios.post(`${API_URL}/user/register`, {
      name,
      surname,
      email,
      password,
    });
    localStorage.setItem('jwt', token);
    return dispatch({type: 'REGISTER', payload: user});
  } catch (error) {
    return error;
  }
};

export const auth = (token) => async (dispatch) => {
  try {
    const {data} = await axios.post('http://localhost:2222/user/auth', {
      token,
    });
    return dispatch({type: 'AUTH', payload: data});
  } catch (error) {
    return error;
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
      dispatch({type: 'LOGIN', payload: user});
      return resolve();
    } catch (error) {
      return reject(error);
    }
  });

export const logout = () => (dispatch) => {
  return dispatch({type: 'LOGOUT'});
};
