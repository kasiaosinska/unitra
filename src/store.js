import { extendObservable } from 'mobx';

class LoginStore {
    constructor() {
        extendObservable(this, {
            isLogged: false,
            username: 'a',
            password: 'a',
        })
    }
}

const store = new LoginStore();

export default store;
