import axios from 'axios';
import {API_URL} from '../../config';

export default (emailTo) =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.post(`${API_URL}/user/send-code-to-email`, {
        emailTo,
      });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
