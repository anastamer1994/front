import * as actionTypes from '../actions/action';

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
    lastNameError: ''
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
                
            };
        default: return state;
    }
}

export default reducer;