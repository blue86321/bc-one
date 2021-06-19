import React, { Component } from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import headlineVideo from '../../assets/videos/headline-video.mp4'
import beoneLogo from '../../assets/images/red-bull-bc-one-logo-basic.png'
import './index.css'

export default class HeadlineEvent extends Component {
    
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
            <div className="headline-event-wrapper">
                <div className="media-preview">
                    <video ref={c => this.video = c} autoPlay muted loop className={this.state.videoLoaded ? "headline-video video-fade-in" : "headline-video"}>
                        <source src={headlineVideo} type="video/mp4" />
                    </video>
                </div>

                <div className="event-info-wrapper">
                    <img className="logo" src={beoneLogo} alt="bc-one-logo" />
                    <h2>Red Bull BC One</h2>
                    <ul className="event-btns">
                        <li><a href="https://www.redbull.com/int-en/events/bcone-ebattle">Join the E-Battle</a></li>
                        <li><a href="https://www.redbull.com/int-en/videos/red-bull-bc-one-world-final-2021-poland-announcement-clip"><PlayArrowIcon/>Watch the Teaser</a></li>
                        <li><a href="https://www.redbull.com/int-en/events/red-bull-bc-one-world-final-2020">World Final 2020 Replay</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

