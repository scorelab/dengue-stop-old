// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import logger from 'redux-logger';

import rootReducer from '../reducers';

export default function configureStore() {

  const store = createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(logger)
    )
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = rootReducer; 
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
