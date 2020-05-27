import axios from 'axios';
import {API_URL} from '../../config';

export default (code, token) =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.post(`${API_URL}/user/email-verification`, {
        code,
        token,
      });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
