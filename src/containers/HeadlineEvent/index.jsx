import React, { Component } from 'react'
import {connect} from 'react-redux'
import './index.css'
import headlineVideo from '../../common/videos/headline-video.mp4'
import beoneLogo from '../../common/images/red-bull-bc-one-logo-basic.png'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

class HeadlineEvent extends Component {
    
    state = {
        videoLoaded : false
    }

    componentDidMount(){

        // video fade in effect
        if (this.video){
            this.video.addEventListener("loadeddata", () => {
                this.setState({videoLoaded : true})
            })
        }
    }
    
    render() {
        return (
            <div className="headline-event-wrapper dark-theme">
                <video ref={c => this.video = c} autoPlay muted loop className={this.state.videoLoaded ? "headline-video video-fade-in" : "headline-video"}>
                    <source src={headlineVideo} type="video/mp4" />
                </video>

                <div className="event-info-wrapper">
                    <img className="logo" src={beoneLogo} alt="bc-one-logo" />
                    <h2>Red Bull BC One</h2>
                    <ul className="event-btns">
                        <li><a href="#">Join the E-Battle</a></li>
                        <li><a href="#"><PlayArrowIcon/>Watch the Teaser</a></li>
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
