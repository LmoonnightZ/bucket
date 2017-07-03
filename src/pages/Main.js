import React from 'react';
import { BrowserRouter as Router,Route} from  'react-router';
import UserAddPage from './UserAdd';
import HomePage from './Home';

class Main extends React.Component{
    render(){
        return (
                <Router>
                        <Route path="/" exact  component={HomePage}/>
                        <Route path="/user/add" component={UserAddPage}/>
                </Router>
        );
    }
}

export default Main;