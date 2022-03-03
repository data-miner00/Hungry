import { Actions, Title } from '../utils/constants';

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

export const setTitle = (title: string) => {
    return {
        type: Title.SET_TITLE,
        payload: title,
    };
};
