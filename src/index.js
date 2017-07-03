import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter  as Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import UserAddPage from './pages/UserAdd';
import HomePage from './pages/Home';
import UserListPage from './pages/UserList';

const hashHistory = createBrowserHistory();
const HomeLayout = ({ match }) => (
    <div>
        <Route exact path={`${match.url}/`} component={HomePage}/>
        <Route  path={`${match.url}user/add`} component={UserAddPage}/>
        <Route  path={`${match.url}user/list`} component={UserListPage}/>
    </div>
)


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={HomeLayout}/>
    </Router>
), document.getElementById('app'));