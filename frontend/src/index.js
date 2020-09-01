import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Routers/Auth';
import store from './store/configureStore';
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}><Auth /></Provider>, document.getElementById('app'));
module.hot.accept();