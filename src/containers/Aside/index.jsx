import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Aside extends Component {

    state = {

    }

    componentDidMount(){
        // // ajax
        // const url = "http://localhost:5000/v3/api/graphql/v1/v3/feed/en-INT/related-to/rrn:slug:event-series:bc-one"
        // const params = {
        //     "filter[type]" : "stories,videos,videos-360,image-galleries,project-profiles,event-profiles,films,person-profiles,externals,collections,shows,episode-videos,trailer-videos,recap-videos,live-videos,games,commercials,event-series,audio-episodes,audio-series",
        //     "filter[subType][not]" : "playlist",
        //     "page[limit]" : 12,
        //     "scoring" : "masonry",
        //     "rb3Schema" : "v1:cardList",
        // }
        // axios.get(url, {params}).then(res => {
        //     res.data["data"].map(aside => {
        //         console.log("aside", aside);
        //     })
        // })

        this.setState({});
    }

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