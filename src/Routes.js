import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPage from 'Pages/ListPage';
import CreatePage from 'Pages/CreatePage';
import DetailPage from 'Pages/DetailPage';
import EditPage from 'Pages/EditPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
