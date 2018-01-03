export const login = (username, password) => {
    return {
        type: 'LOGIN',
        username,
        password,
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}

// const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
// const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
// const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
//
// export function login(username, password) {
//   return dispatch => {
//     dispatch(setLoginPending(true));
//     dispatch(setLoginSuccess(false));
//     dispatch(setLoginError(null));
//
//     callLoginApi(username, password, error => {
//       dispatch(setLoginPending(false));
//       if (!error) {
//         dispatch(setLoginSuccess(true));
//       } else {
//         dispatch(setLoginError(error));
//       }
//     });
//   }
// }
//
// function setLoginPending(isLoginPending) {
//   return {
//     type: SET_LOGIN_PENDING,
//     isLoginPending
//   };
// }
//
// function setLoginSuccess(isLoginSuccess) {
//   return {
//     type: SET_LOGIN_SUCCESS,
//     isLoginSuccess
//   };
// }
//
// function setLoginError(loginError) {
//   return {
//     type: SET_LOGIN_ERROR,
//     loginError
//   }
// }
//
// function callLoginApi(username, password, callback) {
//   setTimeout(() => {
//     if (username === 'kasia' && password === '123') {
//       return callback(null);
//     } else {
//       return callback(new Error('Invalid email and password'));
//     }
//   }, 1000);
// }