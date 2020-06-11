import axios from 'axios';
import {API_URL} from '../../config';

export default (userId, eventId, eventUrl) =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.patch(`${API_URL}/event/unjoin`, {
        userId,
        eventId,
        eventUrl,
      });
      return resolve(data);
    } catch (error) {
      return reject(error);
    }
  });
