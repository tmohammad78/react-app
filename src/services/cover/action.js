import axios from 'axios';
import FETCH_DATA from './actionType';
import { resturantData } from '../util';

const fetchData = () => dispatch => {
  return axios
    .get(resturantData)
    .then(res => {
      const resInfo = res.data;
      return dispatch({
        type: FETCH_DATA,
        payload: resInfo
      });
    })
    .catch(err => {
      console.log(err, 'Could not fetch foods. Try again later.');
    });
};

export default fetchData;
