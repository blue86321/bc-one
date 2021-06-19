import React, { Component } from 'react'
import {
    EventCard,
    StoryCard,
    FilmCard,
    VideoCard,
    ArtistCard,
    ImageGalleryCard,
    DefaultCard,
} from '../../Card'
import './index.css'


export default class FeedCard extends Component {
    state = {
        storyOP: "c_crop,x_703,y_0,h_2133,w_2489/c_fill,w_490,h_408/q_auto,f_auto",
        eventOP: "c_crop,x_388,y_0,h_5304,w_6188/c_fill,w_510,h_425/q_auto,f_auto",
        eventLogoOP: "e_trim:10:transparent/c_limit,w_309/q_auto,f_png",
        filmOP: "c_fill,w_300,ar_2:3/q_auto,f_auto",
        artistOP: "c_crop,x_0,y_0,h_2844,w_2133/c_fill,w_510,h_729/q_auto,f_auto",
        videoOP: "c_crop,x_1277,y_0,h_3712,w_2784/c_fill,w_510,h_729/q_auto,f_auto",
        imageGalleryOP: "c_crop,x_1854,y_0,h_4781,w_3586/c_fill,w_530,h_757/q_auto,f_auto",
        defaultOP: "c_crop,x_1347,y_0,h_1602,w_1202/c_fill,w_510,h_729/q_auto,f_auto",
    }

    render() {
        const {id,type} = this.props
        const className = 'feed-card'
        let imageURL;
        let logoURL;
        let newProps;
        switch (type) {
            

            case 'event':
                imageURL = this.props.imageURL.replace("{op}", this.state.eventOP)
                logoURL = this.props.logoURL && this.props.logoURL.replace("{op}", this.state.eventLogoOP)
                newProps = {...this.props,imageURL,logoURL,className}
                return (<div key={id} className="feed-card-wrapper"><EventCard {...newProps}/></div>
                )
            case 'story':
                imageURL = this.props.imageURL.replace("{op}", this.state.storyOP)
                newProps = {...this.props,imageURL,className}
                return (<div key={id} className="feed-card-wrapper"><StoryCard {...newProps}/></div>)
            case 'film':
                imageURL = this.props.imageURL.replace("{op}", this.state.filmOP)
                newProps = {...this.props,imageURL,className}
                return (<div key={id} className="feed-card-wrapper"><FilmCard {...newProps}/></div>)
            case 'artist':
                imageURL = this.props.imageURL.replace("{op}", this.state.artistOP)
                newProps = {...this.props,imageURL,className}
                return (<div key={id} className="feed-card-wrapper"><ArtistCard {...newProps}/></div>)
            case 'imageGallery':
                imageURL = this.props.imageURL.replace("{op}", this.state.imageGalleryOP)
                newProps = {...this.props,imageURL,className}
                return (<div key={id} className="feed-card-wrapper"><ImageGalleryCard {...newProps}/></div>)
            default:
                if (type.indexOf('video') > -1 || type.indexOf('episode') > -1){
                    imageURL = this.props.imageURL.replace("{op}", this.state.videoOP)
                    newProps = {...this.props,imageURL,className}
                    return (<div key={id} className="feed-card-wrapper"><VideoCard {...newProps}/></div>)
                }
                imageURL = this.props.imageURL.replace("{op}", this.state.defaultOP)
                newProps = {...this.props,imageURL,className}
                return (<div key={id} className="feed-card-wrapper"><DefaultCard {...newProps}/></div>)
        }
    }
}
