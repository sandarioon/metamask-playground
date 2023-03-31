import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { useStore } from '../store/store';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
