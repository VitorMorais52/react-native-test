import React from 'react';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
 
  );
}

