import React, { Component } from 'react';
import './style.css';
import { inject } from 'mobx-react';
import store from '../../store';

import Item from '../../containers/Item';

inject(store.itemsStore)
export class AllProducts extends Component {

    render() {
        return (
            <div>
                {store.itemsStore.data.map((item, index) =>
                    <Item
                        key={index}
                        category={item.category}
                        name={item.name}
                        descripton={item.description}
                        url={item.url}
                    />
                    )
                }
            </div>
        )
    }
}

export default AllProducts;
