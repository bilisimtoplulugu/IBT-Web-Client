import axios from 'axios';
import {API_URL} from '../../config';

export default (username) =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.get(`${API_URL}/user/all-joined-events`, {
        params: {username},
      });
      return resolve(data);
    } catch (error) {
      return reject(error);
    }
  });
