import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Todo from './pages/Todo/Todo';
import NotFound from './pages/NotFound/NotFound';

const Router = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/todo-list" component={Todo} />
        <Route path="*" component={NotFound} />
    </Switch>
)

export default Router;