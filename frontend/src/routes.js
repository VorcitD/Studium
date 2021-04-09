import React from'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ShopLogado from './pages/ShopLogado';
import Login from './pages/Login';
import CourseSpace from './pages/CourseSpace';
export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/CourseSpace/:Course_id' component={CourseSpace}></Route>
            <Route path ="/Login" component={Login}></Route>
            <Route path ="/Shop" component={ShopLogado}></Route>
            <Route path = "/SignUp" component={SignUp}></Route>
            <Route path = "/" exact component={Home}></Route>
            </Switch>
            </BrowserRouter>
    )
}