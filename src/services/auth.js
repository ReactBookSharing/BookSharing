import api from './api';

export function login(values){
    return api.post('auth/login/', values);
}

export function logout(){
    return api.post('auth/logout/', {});
}

export function getCurrentUser(token){
    return api.get('auth/me/', {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
    });
}

export function registerUser(values){
    return api.post('auth/register/', values);
}
