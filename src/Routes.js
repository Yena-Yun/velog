import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from 'Pages/ListPage';
import CreatePage from 'Pages/CreatePage';
import DetailPage from 'Pages/DetailPage';
import EditPage from 'Pages/EditPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/detail" component={DetailPage} />
        <Route path="/edit" component={EditPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
