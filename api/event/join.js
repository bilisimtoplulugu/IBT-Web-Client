import axios from 'axios';
import {API_URL} from '../../config';

export default (userId, eventId, eventUrl,username) =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.patch(`${API_URL}/event/join`, {
        userId,
        eventId,
        eventUrl,
        username
      });
      return resolve(data);
    } catch (error) {
      return reject(error);
    }
  });
