import React, { Component } from 'react'
import {connect} from 'react-redux'
import './index.css'

class HeadlineEvent extends Component {
    
    
    render() {
        return (
            <div className="headline-event-wrapper">
                <video autoPlay loop className="headline-video">
                    <source src="/sources/headline-video.mp4" type="video/mp4" />
                </video>
                
                HeadlineEvent...
            </div>
        )
    }
}

export default connect(
    // state
    state => ({}),
    // method to operate state
    {

    }
)(HeadlineEvent)
