import sendRequest from '../utils/request';
import { Dispatch } from 'redux';

export function getUserList(query: any) {
  return (dispatch: Dispatch) => {
    return sendRequest('/user_list', query, 'GET')
      .then(response => {
        dispatch({ type: 'USERLIST', data: response });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
