// React and Redux.
import React from 'react';
import { Provider } from 'react-redux';

/* Redux Store */
import  { wrapper, store }  from '../store/index';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);