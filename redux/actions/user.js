import axios from 'axios';
import {API_URL} from '../../config';

export const register = (name, surname, email, password) => async (
  dispatch
) => {
  console.log(name, surname, email, password);
  axios.post(`${API_URL}/user/register`, {name, surname, email, password});
  dispatch({type: 'REGISTER'});
};
