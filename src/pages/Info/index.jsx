import React, { Component } from 'react'
import { connect } from 'react-redux'
import Intro from '../../components/Intro'
import TopStory from '../../components/TopStory'
import MoreStory from '../../containers/MoreStory'
import Event from '../../containers/Event'
import Shop from '../../containers/Shop'
import Sponser from '../../components/Sponser'
import EventSeriesGallery from '../../containers/EventSeriesGallery'

class Info extends Component {
    render() {
        return (
            <div className="info">
                <Intro/>
                <TopStory/>
                <MoreStory/>
                <Event/>
                <Shop/>
                <Sponser/>
                
                <EventSeriesGallery/>
            </div>
        )
    }
}


export default connect(
    state => ({}),
    {}
)(Info)