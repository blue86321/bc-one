import React, { Component, Fragment } from 'react'
import HeadlineEvent from './components/HeadlineEvent'
import Header from './containers/Header'
import Content from './containers/Content'
import SocialMedia from './components/SocialMedia'
import Aside from './components/Aside'
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
            </Fragment>
        )
    }
}
