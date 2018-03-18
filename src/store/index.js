import { extendObservable } from 'mobx';
import { Fb } from '../firebase/firebaseStore';

class LoginStore {
    constructor() {
        extendObservable(this, {
            isLogged: false,
        })
    }
}

class ItemsStore {
    constructor() {
        extendObservable(this, {
            "data": [
                {
                    "id": 1,
                    "category": "video",
                    "name": "unitra",
                    "url": "http://via.placeholder.com/350x150",
                    "description": "adc"
                },
                {
                    "id": 2,
                    "category": "magnetowid",
                    "name": "aaa",
                    "url": "http://via.placeholder.com/350x150",
                    "description": "adc"
                },
                {
                    "id": 3,
                    "category": "adapter",
                    "name": "aaa",
                    "url": "http://via.placeholder.com/350x150",
                    "description": "adc"
                },
                {
                    "id": 4,
                    "category": "radio",
                    "name": "aaa",
                    "url": "http://via.placeholder.com/350x150",
                    "description": "adc"
                },
                {
                    "id": 5,
                    "category": "radio",
                    "name": "aaa",
                    "url": "http://via.placeholder.com/350x150",
                    "description": "adc"
                }
            ]
        })
    }
}

class Store {
    constructor() {
        this.loginStore = new LoginStore(this);
        this.itemsStore = new ItemsStore(this);
    }
}

const store = new Store();

export default store;