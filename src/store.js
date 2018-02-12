import { extendObservable } from 'mobx';

class LoginStore {
    constructor() {
        extendObservable(this, {
            login: false,
            username: 'kasia',
            password: '12345',
        })
    }
}

const store = new LoginStore();

export default store;
