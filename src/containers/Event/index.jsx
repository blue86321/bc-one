import React, { Component } from 'react'
import { connect } from 'react-redux'

class Event extends Component {
    render() {
        return (
            <div className="event-wrapper">
                <h2>Events</h2>
                <div className="event-tabs">
                    <button className="upcoming">Upcoming</button>
                    <button className="past">Past</button>
                </div>
                <div className="data-rail"></div>
            </div>
        )
    }
}


export default connect(
    state => ({})
    ,{}
)(Event)