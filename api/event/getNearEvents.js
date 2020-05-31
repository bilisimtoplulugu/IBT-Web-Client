import axios from 'axios';
import {API_URL} from '../../config';

export default () =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.get(`${API_URL}/event/near`);
      return resolve(data);
    } catch (error) {
      return reject(error);
    }
  });
