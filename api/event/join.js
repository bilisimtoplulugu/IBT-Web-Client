import axios from 'axios';
import {API_URL} from '../../config';

export default (userId, eventId) =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.patch(`${API_URL}/event/join`, {
        userId,
        eventId,
      });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
