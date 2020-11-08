import * as actionsTypes from './actionTypes';
import axios from 'axios';

export const _getAllAdmins = (admins) => {
    return {
        type: actionsTypes.ADMINS,
        data: admins
    }
}

export const fetchAdminsFailed = () => {
    return {
        type: actionsTypes.FETCH_ADMINS_FAILED
    }
}
export const fetchAllAdmins = () => {
    return dispatch => {
        axios.get('http://localhost:8088/students').then(response => {
            dispatch(_getAllAdmins(response.data));
        }).catch(error => {
            fetchAdminsFailed();
        })
    };
}

export const _addAdmin = (admin) => {
    return {
        type: actionsTypes.ADD_ADMIN,
        admin
    }
}

