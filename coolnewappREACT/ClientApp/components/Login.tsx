import * as React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router'
import { fakeAuth } from './Auth'

interface LoginState {
    redirectToReferrer: boolean;
}

export class Login extends React.Component<RouteComponentProps<{}>, LoginState> {

    state = {
        redirectToReferrer: false
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true })
        })
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <div className="middle-box text-center loginscreen">
                <div className="form-group middle-box">
                    <input type="email" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button onClick={this.login} className="btn btn-primary block full-width m-b">Login</button>
                <a href="#"><small>Forgot password?</small></a>
            </div>
        )
    }

}
