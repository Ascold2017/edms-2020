import React from 'react';
import ReactDOM from 'react-dom';
import RootNavigator from './navigator'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
