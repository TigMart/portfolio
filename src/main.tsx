/* eslint-disable prettier/prettier */
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';

import SingleToolsBootstrap from '@components/helpers/SingleToolsBootstrap';
import store from '@store/store';

import App from './App';
import persistor from './store';

import './service/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SingleToolsBootstrap>
        <Router>
          <Suspense fallback="Loading...">
            <App />
          </Suspense>
        </Router>
      </SingleToolsBootstrap>
    </PersistGate>
  </Provider>,
);
