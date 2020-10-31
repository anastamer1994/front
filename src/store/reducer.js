import * as actionTypes from './action';

const initialeState = {};

const reducer = (state = initialeState, action) => {

    switch (action.type) {
        case actionTypes.ADD_ADMIN:
            return {

            };
        case actionTypes.EDIT_ADMIN:
            return {

            };
        case actionTypes.REMOVE_ADMIN:
            return {

            };
        case actionTypes.ADMINS:
            return {

            };
        default: return state;
    }
}

export default reducer;