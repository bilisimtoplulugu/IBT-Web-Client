import axios from 'axios';
import {API_URL} from '../../config';

export default (userId, formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.patch(
        `${API_URL}/user/change-profile-photo?userId=${userId}`,formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return resolve(data);
    } catch (error) {
      return reject(error);
    }
  });
