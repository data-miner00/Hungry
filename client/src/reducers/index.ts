import { combineReducers } from 'redux';
import { Action } from 'redux';
import { Actions } from '../utils/constants';

const authReducer = (state = '', action: Action) => {
  switch (action.type) {
    case Actions.REDUX_LOGIN:
      //@ts-ignore
      return action.payload;

    case Actions.REDUX_LOGOUT:
      return '';

    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
});
