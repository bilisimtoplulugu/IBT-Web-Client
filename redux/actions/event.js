import axios from 'axios';
import {API_URL} from '../../config';

export const getNearEvents = () => async (dispatch) => {
  try {
    const {data} = await axios.get(`${API_URL}/event/near`);
    return dispatch({type: 'GET', payload: data});
  } catch ({response: {data}}) {
    console.log(data);
  }
};
