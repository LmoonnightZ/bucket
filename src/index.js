import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter  as Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import UserAddPage from './pages/UserAdd';
import HomePage from './pages/Home';
import UserListPage from './pages/UserList';
const hashHistory = createBrowserHistory();

ReactDOM.render((
    <Router history={hashHistory}>
       <div>
           <Route path="/" exact  component={HomePage}/>
           <Route path="/user/add" component={UserAddPage}/>
           <Route path="/user/list" component={UserListPage}/>
       </div>
    </Router>
), document.getElementById('app'));