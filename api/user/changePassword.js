import axios from 'axios';
import {API_URL} from '../../config';

export default (userId, oldPass, newPass, newPassAgain) =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.patch(`${API_URL}/user/change-password`, {
        userId,
        oldPass,
        newPass,
        newPassAgain,
      });
      return resolve(data);
    } catch (error) {
      return reject(error);
    }
  });
