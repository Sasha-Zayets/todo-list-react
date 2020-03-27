import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Todo from './pages/Todo/Todo';

const Router = () => (
    <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/todo-list" component={Todo} />
    </Switch>
)

export default Router;