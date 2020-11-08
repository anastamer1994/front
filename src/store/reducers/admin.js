import * as actionTypes from '../actions/actionTypes';

const initialeState = {
    firstName: '',
    lastName: '',
    bithDate: '',
    bithPlace: '',
    gender: '',
    codePostal: '',
    city: '',
    adresse: '',
    cellPhone: '',
    phone: '',
    contry: '',
    cin: '',
    nationality: '',
    province: '',
    region: '',
    academy: '',
    matricule: '',
    fonctionality: '',
    etablName: '',
    schoolLevel: '',
    email: '',
    password: '',
    confirmPassword: '',
    photo: '',
    firstNameError: '',
    lastNameError: '',
    error: false,
    admins: {
        id: '',
        name: '',
        prenom: '',
        email: '',
        password: ''
    }
};

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
                ...state,
                admins: action.data,
                error: false
            };
        case actionTypes.FETCH_ADMINS_FAILED:
            return {
                ...state,
                error: true
            };
        default: return state;
    }
}

export default reducer;