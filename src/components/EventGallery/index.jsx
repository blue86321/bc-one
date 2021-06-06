import React, { Component } from 'react'
import axios from 'axios'
import ImageSliderProgress from '../ImageSliderProgress'
import GalleryCard from '../ImageSliderProgress/GalleryCard'
import './index.css'

export default class EventGallery extends Component {

    state = {
        gallery : [
            {"id":"rrn:content:images:c6b83829-d3ba-49e1-a0d5-b4abc1a35bf0:en-INT","altText":"Red Bull BC One World Final 2020 Champion Belt at the Red Bull Hangar-7 in Salzburg, Austria, on November 27th, 2020","copyright":"© Little Shao/Red Bull Content Pool","title":"The champion belt of Red Bull BC One 2020","imageURL":"https://img.redbull.com/images/c_crop,x_1,y_0,h_2133,w_3199/c_fill,w_800,h_533/q_auto,f_auto/redbullcom/2020/11/29/ckrujzvybnxbvhcrx9dc/red-bull-bc-one-2020-belt"},
            {"id":"rrn:content:images:a6a9276c-beb5-40df-8b2b-3d6563fbb019:en-INT","altText":"Dj Just A Kid doing the sound check a day prior to the Red Bull Bc One world Final 2020 at the Red Bull Hangar-7 in Salzburg, Austria, on November 27th, 2020","copyright":"© Little Shao/Red Bull Content Pool","title":"DJ Just-a-Kid gets ready for Red Bull BC One 2020","imageURL":"https://img.redbull.com/images/c_crop,x_1,y_0,h_2133,w_3199/c_fill,w_800,h_533/q_auto,f_auto/redbullcom/2020/11/29/vmy6qituzhwbhfnaf4x7/red-bull-bc-one-2020-dj-just-a-kid"},
            {"id":"rrn:content:images:e944b2b8-a54f-4f73-a790-79cc6a584203:en-INT","altText":"The Venue of the Red Bull Bc One World Final 2020 is the Red Bull Hangar-7 in Salzburg, Austria, on November 27th, 2020","copyright":"© Little Shao/Red Bull Content Pool","title":"The Hangar 7 is ready for Red Bull BC One 2020","imageURL":"https://img.redbull.com/images/c_crop,x_1,y_0,h_2133,w_3199/c_fill,w_800,h_533/q_auto,f_auto/redbullcom/2020/11/29/rhufqmwxvmqqkavkbycl/red-bull-bc-one-2020-hangar-7"},
        ],
        op : "c_crop,x_1,y_0,h_2133,w_3199/c_fill,w_800,h_533/q_auto,f_auto",
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
        //         let {id,altText,copyright,title,imageEssence:{imageURL}} = gallery
        //         imageURL = imageURL.replace("{op}", this.state.op)
        //         this.setState({gallery:[...this.state.gallery, {id,altText,copyright,title,imageURL}]})
        //     })
        // })
    }

    render() {
        return (
            <div className="event-gallery-wrapper">

                <div className="event-gallery-container">
                    <h2>Mood</h2>
                    <div className="event-series-gallery">
                        {/* slider */}
                        <ImageSliderProgress key={"event-gallery"}
                            viewportStyle={{width:"950px"}}
                            containerStyle={{marginLeft:"240px"}}
                            progressBarStyle={{paddingLeft:"240px"}}
                        >
                            {
                                this.state.gallery.map(galleryData=>(
                                    <GalleryCard key={galleryData.id} {...galleryData}/>
                                ))
                            }
                        </ImageSliderProgress>
                    </div>
                </div>
            </div>
        )
    }
}
