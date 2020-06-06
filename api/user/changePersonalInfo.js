import axios from 'axios';
import {API_URL} from '../../config';

export default (userId, name, surname,username, email) =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.patch(`${API_URL}/user/change-personal`, {
        userId,
        name,
        surname,
        username,
        email,
      });
      return resolve(data);
    } catch (error) {
      return reject(error);
    }
  });
