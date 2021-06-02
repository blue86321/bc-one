import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class EventGallery extends Component {

    state = {

    }

    componentDidMount(){
        // // ajax
        // const url = "http://localhost:5000/v3/api/graphql/v1/v3/query/en-INT";
        // const params = {
        //     "filter[type]" : "event-series",
        //     "filter[uriSlug]" : "bc-one",
        //     "rb3Schema" : "v1:relatedImageGallery",
        // }
        // axios.get(url, {params}).then(res => {
        //     res.data["data"].images.map(gallery => {
        //         console.log("gallery", gallery)
        //     })
        // })

        this.setState({})
    }

    render() {
        return (
            <div className="event-gallery-wrapper dark-theme">

                <div className="event-gallery-container">
                    <h2>Mood</h2>
                    <div className="event-series-gallery">
                        {/* slider */}
                        
                    </div>
                </div>
            </div>
        )
    }
}
