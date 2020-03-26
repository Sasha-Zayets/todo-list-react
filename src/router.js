import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Todo from './pages/Todo/Todo';

const Router = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/todo-list" component={Todo} />
    </Switch>
)

export default Router;