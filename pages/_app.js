import React from 'react';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from '../lib/store';
import '../public/css/index.css';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
