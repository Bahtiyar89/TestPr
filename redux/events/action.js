import axios from 'axios';

export const initEvents = () => async dispatch => {
  try {
    const res = await axios.get('https://api.github.com/events');
    dispatch({
      type: 'SET_ALL_EVENTS',
      payload: res.data,
    });
  } catch (e) {
    console.log('cdsds');
  }
};

export const listItem = item => async dispatch => {
  try {
    const res = await axios.get(`${'https://api.github.com/users/' + item}`);
    console.log('res.data: ', res.data);
    dispatch({
      type: 'SET_ITEM',
      payload: res.data,
    });
  } catch (e) {
    console.log('cdsds');
  }
};
