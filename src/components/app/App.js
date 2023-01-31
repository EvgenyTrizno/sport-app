import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { SignInPage, SignUpPage, MainPage, SearchPage, MessengerPage } from '../../pages';

import '../../styles/reset.scss';
import '../../styles/vars.scss';
import '../../styles/global.scss';
import './App.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/registration'>
                    <SignUpPage/>
                </Route>
                <Route exact path='/auth'>
                    <SignInPage/>
                </Route>
                <Route exact path='/feed'>
                    <MainPage/>
                </Route>
                <Route exact path='/search'>
                    <SearchPage/>
                </Route>
                <Route exact path='/messenger'>
                    <MessengerPage/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;