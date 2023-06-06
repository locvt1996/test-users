import Layout from '@components/Layout';
import { LinkTo } from '@constants';
import HomePage from '@pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<HomePage />} path={LinkTo.Home} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routers;
