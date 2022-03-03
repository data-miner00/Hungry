import { combineReducers } from 'redux';
import { Action } from 'redux';
import { Actions, Title } from '../utils/constants';

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

const titleReducer = (state = 'Dashboard', action: Action) => {
    //@ts-ignore
    if (action.type == Title.SET_TITLE) return action.payload;

    return state;
};

export default combineReducers({
    auth: authReducer,
    title: titleReducer,
});
