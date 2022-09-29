import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListPage from 'Pages/ListPage';
import CreatePage from 'Pages/CreatePage';
import DetailPage from 'Pages/DetailPage';
import EditPage from 'Pages/EditPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ListPage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/detail" component={DetailPage} />
        <Route path="/edit" component={EditPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
