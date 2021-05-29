import React, { Component } from 'react'
import { connect } from 'react-redux'

class Aside extends Component {
    render() {
        return (
            <div className="aside-wrapper">
                <h2>More like this</h2>
                <div className="aside-cards"></div>
                <button className="info-card-more-btn">Load more</button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(Aside)