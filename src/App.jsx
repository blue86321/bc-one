import React, { Component, Fragment } from 'react'
import {Route, Redirect, Switch, NavLink} from 'react-router-dom'

import ExampleContainer from './containers/ExampleContainer'
import HeadlineEvent from './containers/HeadlineEvent'
import TopNav from './containers/TopNav'

export default class App extends Component {
    
    render() {
        return (
            <Fragment>
                <TopNav/>
                <HeadlineEvent/>

                <hr/>
                <h2>Redux</h2>
                <ExampleContainer/>
                <hr/>
                <h2>Router</h2>
                <NavLink activeClassName="active" className="test" to="/test">Test</NavLink>
                <NavLink activeClassName="active" className="test2" to="/test2">Test2</NavLink>
                <Switch>
                    <Route path="/test" component={ExampleContainer}/>
                    <Route path="/test2" component={TopNav}/>
                    <Redirect to="/test" />
                </Switch>
            </Fragment>
        )
    }
}
