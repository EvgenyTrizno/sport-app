import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import RegisterPage from '../registerPage/RegisterPage';
import AuthPage from '../authPage/AuthPage';

import './App.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/registration'>
                    <RegisterPage/>
                </Route>
                <Route exact path='/auth'>
                    <AuthPage/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;