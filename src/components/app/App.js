import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import PostFeed from '../postFeed/PostFeed';
import { SignInPage, SignUpPage } from '../../pages';

import '../../styles/reset.scss';
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
                    <PostFeed/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;