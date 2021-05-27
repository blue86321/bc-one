import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

class TopNav extends Component {
    render() {
        return (
            <div className="topnav">
                TopNav...
            </div>
        )
    }
}


export default connect(
    state => ({}),
    {}
)(TopNav)