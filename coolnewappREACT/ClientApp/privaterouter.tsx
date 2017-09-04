import * as React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { fakeAuth } from './components/Auth'

export const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route {...rest} render={props => (
        fakeAuth.isAuthenticated ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
    )} />
)