import React from'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path = "/SignUp" component={SignUp}></Route>
            <Route path = "/" exact component={Home}></Route>
            </Switch>
            </BrowserRouter>
    )
}