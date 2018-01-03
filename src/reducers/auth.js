const defaultStore = {
    isLoggedIn: false,
    username: '',
    password: '',
}

export default function auth ( state = defaultStore, action ) {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.username,
                password: action.password
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: '',
                password: ''
            })
        default:
            return state;
    }
}

// const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
// const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
// const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
//
// export default function reducer(state = {
//   isLoginSuccess: false,
//   isLoginPending: false,
//   loginError: null
// }, action) {
//   switch (action.type) {
//     case SET_LOGIN_PENDING:
//       return Object.assign({}, state, {
//         isLoginPending: action.isLoginPending
//       });
//
//     case SET_LOGIN_SUCCESS:
//       return Object.assign({}, state, {
//         isLoginSuccess: action.isLoginSuccess
//       });
//
//     case SET_LOGIN_ERROR:
//       return Object.assign({}, state, {
//         loginError: action.loginError
//       });
//
//     default:
//       return state;
//   }
// }