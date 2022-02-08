import * as React from 'react';
import { StyleSheet, LogBox } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import comicsReducer from './store/comics-reducer';
import Database from './Database';
import Main from './components/Main';

const db = new Database();
LogBox.ignoreAllLogs();

db.initDB().then(() => {
    console.log('Initialized database...');
}).catch(err => {
    console.log('Intializing database failed.');
    console.log(err);
});

const rootReducer = combineReducers({
  comics: comicsReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
