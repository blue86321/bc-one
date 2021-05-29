import React, { Component } from 'react'
import {connect} from 'react-redux'
import './index.css'
import headlineVideo from '../../common/videos/headline-video.mp4'
import beoneLogo from '../../common/images/red-bull-bc-one-logo-basic.png'
import Icon from '@material-ui/core/Icon';

class HeadlineEvent extends Component {
    
    
    render() {
        return (
            <div className="headline-event-wrapper dark-theme">
                <video autoPlay muted loop className="headline-video">
                    <source src={headlineVideo} type="video/mp4" />
                </video>

                <div className="event-info-wrapper">
                    <img className="logo" src={beoneLogo} alt="bc-one-logo" />
                    <h2>Red Bull BC One</h2>
                    <ul className="event-btns">
                        <li><a href="#">Join the E-Battle</a></li>
                        <li><a href="#"><Icon>play_arrow</Icon>Watch the Teaser</a></li>
                        <li><a href="#">World Final 2020 Replay</a></li>
                    </ul>
                </div>
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
