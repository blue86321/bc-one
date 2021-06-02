import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import ImageSlider from '../../components/ImageSlider'
import StoryCard from '../../components/ImageSlider/StoryCard'
import './index.css'

class StorySlider extends Component {

    state = {
        stories : [
            {id:'001',img:'',title:'Enter the Red Bull BC One E-Battle 2021 to secure a ticket to Gdansk',desc:'Red Bull BC One E-Battle is back. Find out everything you need to know and how to enter below.',tag:'Breaking'},
            {id:'002',img:'',title:'Enter the Red Bull BC One E-Battle 2021 to secure a ticket to Gdansk',desc:'Red Bull BC One E-Battle is back. Find out everything you need to know and how to enter below.',tag:'Breaking'},
            {id:'003',img:'',title:'Enter the Red Bull BC One E-Battle 2021 to secure a ticket to Gdansk',desc:'Red Bull BC One E-Battle is back. Find out everything you need to know and how to enter below.',tag:'Breaking'},
            {id:'004',img:'',title:'Enter the Red Bull BC One E-Battle 2021 to secure a ticket to Gdansk',desc:'Red Bull BC One E-Battle is back. Find out everything you need to know and how to enter below.',tag:'Breaking'},
            {id:'005',img:'',title:'Enter the Red Bull BC One E-Battle 2021 to secure a ticket to Gdansk',desc:'Red Bull BC One E-Battle is back. Find out everything you need to know and how to enter below.',tag:'Breaking'},
            {id:'006',img:'',title:'Enter the Red Bull BC One E-Battle 2021 to secure a ticket to Gdansk',desc:'Red Bull BC One E-Battle is back. Find out everything you need to know and how to enter below.',tag:'Breaking'},
            {id:'007',img:'',title:'Enter the Red Bull BC One E-Battle 2021 to secure a ticket to Gdansk',desc:'Red Bull BC One E-Battle is back. Find out everything you need to know and how to enter below.',tag:'Breaking'},
        ]
    }

    componentDidMount(){
        // // ajax
        // const url = "http://localhost:5000/v3/api/graphql/v1/v3/feed/en-INT%3Een-INT/related-to/rrn:content:event-series:ae51bd1a-19d3-4050-ac35-837c734ea1bb";
        // const params = {
        //     "scoring" : "featured",
        //     "score.featured.localeMixing" : "en-INT",
        //     "score.featured.subType" : "rail",
        //     "disableUsageRestrictions" : true,
        //     "rb3Schema" : "v1:editorialList",
        //     "rb3Scoring" : "featuredFresh",
        // }
        // axios.get(url, {params}).then(res => {
        //     const {title,cards} = res.data["data"]
        //     cards.map(story => {
        //         console.log("moreStories", story);
        //     })
        // })

        this.setState({});

    }

    render() {
        return (
            <div className="story-slider-wrapper hover-show-slider-nav light-theme">
                <ImageSlider>

                    <div className="section-info">
                        <div className="section-title"><h2>More stories like this</h2></div>
                        <div className="section-desc">Enjoy a hand-picked selection of the best stories from the world of Red Bull BC One.</div>
                    </div>

                    <StoryCard/>
                    <StoryCard/>
                    {
                        this.state.stories.map(story => (
                            <StoryCard {...story} />
                        ))
                    }
                </ImageSlider>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(StorySlider)