import ReactDOM from 'react-dom/client';

import SingleToolsBootstrap from '@components/helpers/SingleToolsBootstrap';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SingleToolsBootstrap>
    <App />
  </SingleToolsBootstrap>,
);
