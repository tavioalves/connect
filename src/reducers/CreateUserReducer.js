import {
    VALID_NAME,
    INVALID_NAME,
    VALID_REGISTRATION,
    INVALID_REGISTRATION,
    VALID_DATE,
    INVALID_DATE,
    VALID_EMAIL,
    INVALID_EMAIL
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    registration: '',
    date: '',
    email: '',
    errorMessageName: '',
    errorMessageRegistration: '',
    errorMessageDate: '',
    errorMessageEmail: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VALID_NAME:
            return { ...state, name: action.payload, errorMessageName: '' };
        case INVALID_NAME:
            return { ...state, name: '', errorMessageName: 'Digite um nome válido' };
        case VALID_REGISTRATION:
            return { ...state, registration: action.payload, errorMessageRegistration: '' };
        case INVALID_REGISTRATION:
            return {
                ...state,
                registration: '',
                errorMessageRegistration: 'Matrícula deve conter apenas números'
            };
        case VALID_DATE:
            return { ...state, date: action.payload, errorMessageDate: '' };
        case INVALID_DATE:
            return { ...state, date: action.payload, errorMessageDate: 'Digite um formato de data válido' };
        case VALID_EMAIL:
            return { ...state, email: action.payload, errorMessageEmail: '' };
        case INVALID_EMAIL:
            return { ...state, email: action.payload, errorMessageEmail: 'Digite um e-mail válido' }
        default:
            return state;
    }
};
