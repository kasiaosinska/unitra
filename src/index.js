import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import ErrorBoundary from './ErrorBoundary';

const app = (
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
