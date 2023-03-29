import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import Entrypoint from './src/Entrypoint';
import reducers from './redux';

const App = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Entrypoint />
    </Provider>
  );
};

export default App;
