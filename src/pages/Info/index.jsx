import React, { Component } from 'react'
import { connect } from 'react-redux'
import Intro from '../../components/Intro'
import TopStory from '../../components/TopStory'
import StorySlider from '../../containers/StorySlider'
import Event from '../../containers/Event'
import Shop from '../../components/Shop'
import Sponser from '../../components/Sponser'
import EventGallery from '../../components/EventGallery'

class Info extends Component {
    render() {
        return (
            <div>
                <Intro/>
                <TopStory/>
                <StorySlider/>
                <Event/>
                <Shop/>
                <Sponser/>
                <EventGallery/>
            </div>
        )
    }
}


export default connect(
    state => ({}),
    {}
)(Info)