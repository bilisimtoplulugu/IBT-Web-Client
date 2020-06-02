import axios from 'axios';
import {API_URL} from '../../config';

export default (eventUrl) =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.get(`${API_URL}/event/all-participants`, {
        params: {eventUrl},
      });
      return resolve(data);
    } catch (error) {
      return reject(error);
    }
  });
