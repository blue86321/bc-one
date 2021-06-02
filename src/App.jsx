import React, { Component, Fragment } from 'react'
import {Route, Redirect, Switch, NavLink} from 'react-router-dom'

import ExampleContainer from './containers/ExampleContainer'
import HeadlineEvent from './containers/HeadlineEvent'
import Header from './containers/Header'
import Content from './containers/Content'
import SocialMedia from './components/SocialMedia'
import Aside from './containers/Aside'
import Footer from './components/Footer'

export default class App extends Component {
    
    render() {
        return (
            <Fragment>
                <Header/>
                <HeadlineEvent/>
                <Content/>
                <SocialMedia/>
                <Aside/>
                <Footer/>

                <hr/>
                <h2>Redux</h2>
                <ExampleContainer/>
                <hr/>
                {/* <h2>Router</h2>
                <NavLink activeClassName="active" className="test" to="/test">Test</NavLink>
                <NavLink activeClassName="active" className="test2" to="/test2">Test2</NavLink>
                <Switch>
                    <Route path="/test" component={ExampleContainer}/>
                    <Route path="/test2" component={Header}/>
                    <Redirect to="/test" />
                </Switch> */}
            </Fragment>
        )
    }
}
