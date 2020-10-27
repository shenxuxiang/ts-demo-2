import { Store } from 'redux';
// import { AC } from '../actions/home';

/* eslint-disable */
export default function(state: Store, action: any) {
  switch (action.type) {
    case 'USERLIST':
      return {...state, userList: action.data};
    default:
      return state || {};
  }
}
