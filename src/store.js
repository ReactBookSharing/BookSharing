import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';
import { updateHeader } from './services/api';

const myLogger = store => next => action => {
  console.log('MYLOGGER(ACTION): ', action);
  console.log('MYLOGGER(STORE): ', store.getState());
  next(action);
};
const localCopy = store => next => action => {
  if(action.type === 'LOGIN') {
    // console.log('asdf');
    updateHeader('Authorization', `Token ${action.payload}`);
  }
  next(action);
}
const configureStore = () => {
  const __DEV__ = process.env.NODE_ENV;
  const middlewares = [thunk];
  middlewares.push(createLogger({ collapsed: true }));
  middlewares.push(myLogger);
  middlewares.push(localCopy);
  const store =
    __DEV__ !== 'production'
      ? createStore(
          rootReducer,
          compose(
            applyMiddleware(...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
              window.__REDUX_DEVTOOLS_EXTENSION__()
          )
        )
      : createStore(rootReducer, applyMiddleware(thunk));
  return store;
};

export default configureStore;
