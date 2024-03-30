/* eslint-disable prettier/prettier */
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import SingleToolsBootstrap from '@components/helpers/SingleToolsBootstrap';
import store from '@store/store';

import App from './App';
import persistor from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SingleToolsBootstrap>
        <App />
      </SingleToolsBootstrap>
    </PersistGate>
  </Provider>,
);
