import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Protected } from './components/Protected';
import { Login } from './components/Login'
import { PrivateRoute } from './privaterouter'




export const routes = <Layout>
    <PrivateRoute exact path='/' component={ Home } />
    <PrivateRoute path='/counter' component={ Counter } />
    <PrivateRoute path='/fetchdata' component={FetchData} />
    <Route path="/login" component={Login} />
    <PrivateRoute path="/protected" component={ Protected } />
</Layout>;


