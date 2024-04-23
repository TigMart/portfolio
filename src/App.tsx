import { Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';
import NotFoundPage from '@pages/NotFoundPage';
import useNetwork from '@hooks/useNetwork';
import NoInternet from '@pages/NoInternet';

function App() {
  const isOnline = useNetwork();

  return isOnline ? (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  ) : (
    <NoInternet />
  );
}

export default App;
