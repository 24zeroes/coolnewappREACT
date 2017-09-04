import * as React from 'react'
import { RouteComponentProps } from 'react-router'
 
interface ProtectedState {

}

export class Protected extends React.Component<RouteComponentProps<{}>, ProtectedState> {

    

    public render() {

    return  <div>
        <h1>Protected shit</h1>
        </div>;

    }

}