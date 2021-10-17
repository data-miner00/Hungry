import { Actions } from '../utils/constants';

export const login = (token: string) => {
  return {
    type: Actions.REDUX_LOGIN,
    payload: token,
  };
};

export const logout = () => {
  return {
    type: Actions.REDUX_LOGOUT,
  };
};
