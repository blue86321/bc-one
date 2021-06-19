import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ImageSlider from '../../components/ImageSlider'
import {StoryCard} from '../../components/Card'
import './index.css'


class StorySlider extends Component {

    state = {
        stories : [],
        imgOP : "c_crop,x_43,y_59,h_1885,w_2828/c_fill,w_380,h_253/q_auto,f_auto",
        sectionTitle : 'More stories like this',
        sectionDesc : 'Enjoy a hand-picked selection of the best stories from the world of Red Bull BC One.',
    }

    getStory = async () => {
        try {
            const url = "http://localhost:5000/v3/api/graphql/v1/v3/feed/en-INT%3Een-INT/related-to/rrn:content:event-series:ae51bd1a-19d3-4050-ac35-837c734ea1bb";
            const params = {
                "scoring" : "featured",
                "score.featured.localeMixing" : "en-INT",
                "score.featured.subType" : "rail",
                "disableUsageRestrictions" : true,
                "rb3Schema" : "v1:editorialList",
                "rb3Scoring" : "featuredFresh",
            }
            const res = await axios.get(url, {params})
            const {title:sectionTitle,standfirst:sectionDesc,cards} = res.data["data"]
            const stories = cards.map(story => {
                const {masterId:id,content,uriSlug} = story
                const {title,standfirst:desc,tag:{text:tagText}} = content
                const {title:imgTitle,imageEssence:{imageURL:imgURL}} = story.media.mainImage
                const imageURL = imgURL.replace("{op}", this.state.imgOP)
                const newStory = {id,title,desc,tagText,imageURL,imgTitle,uriSlug}
                return newStory
            })
            this.setState({sectionTitle,sectionDesc,stories})
        } catch {
            console.log("showing test data because not opening the proxy server.")
            this.setState({
                stories : [
                    {"id":"b5c0d5d8-5bbc-4bfe-b479-26b04a564b8b","title":"Enter the Red Bull BC One E-Battle 2021 to secure a ticket to Gdansk","desc":"Red Bull BC One E-Battle is back. Find out everything you need to know and how to enter below.","tagText":"Breaking","imageURL":"https://img.redbull.com/images/c_crop,x_43,y_59,h_1885,w_2828/c_fill,w_380,h_253/q_auto,f_auto/redbullcom/2021/4/26/pvcj6n8yoil9egocemk5/kastet-living-room","imgTitle":"B-Girl Kastet records a round","uriSlug":"red-bull-bc-one-ebattle-info-and-details"},
                    {"id":"1a21e9c9-f856-45c4-8be3-60b04e795fa4","title":"2 whole days of Red Bull BC One World Finals in Gdańsk? Yes please","desc":"The 18th edition of the prestigious breaking competition will take place for the first time in Gdańsk, Poland, on November 5 and 6.","tagText":"Breaking","imageURL":"https://img.redbull.com/images/c_crop,x_43,y_59,h_1885,w_2828/c_fill,w_380,h_253/q_auto,f_auto/redbullcom/2021/2/25/xxi71nggkyd905ifgwnu/red-bull-bc-one-2021-gdansk-circle","imgTitle":"The Red Bull BC One World Final 2021 is coming to Gdańsk, Poland","uriSlug":"red-bull-bc-one-2021-announcement"},
                    {"id":"5ca7f308-96f7-4872-a37c-f6b3199b69d9","title":"Cypher to stage: the way of B-Boy Thomaz","desc":"Thomaz is one of the most successful competitive Polish breakers. Find out how he was inspired to elevate his training through competing at stage competitions, local battles, and cypher heavy jams.","tagText":"Breaking","imageURL":"https://img.redbull.com/images/c_crop,x_43,y_59,h_1885,w_2828/c_fill,w_380,h_253/q_auto,f_auto/redbullcom/2021/3/25/wov5vwe8skntammfrvjg/b-boy-thomaz-portrait-gdansk","imgTitle":"B-Boy Thomaz","uriSlug":"b-boy-thomaz-evolution"},
                    {"id":"f9ad8f86-5135-4182-89dd-ca904340814b","title":"7 reasons why the art of breaking is up there with high-level sports","desc":"Breaking, a dance born from hip-hop culture, is an art form that demands the same commitment as elite sports. Learn why breaking has reached that status.","tagText":"Breaking","imageURL":"https://img.redbull.com/images/c_crop,x_43,y_59,h_1885,w_2828/c_fill,w_380,h_253/q_auto,f_auto/redbullcom/2021/3/18/zwhdtdepqnveblyu1nwi/junior-roof-red-bull-bc-one-all-star-tour-austria-2020","imgTitle":"Junior is known for his superhuman strength","uriSlug":"breaking-competitive-sporting-discipline"},
                    {"id":"a02e0349-9a82-4591-b5da-a8b0d03f2f77","title":"Interrupting your scrolling to bring you all you need to know about Kastet","desc":"Find out everything you need to know about the rising Russian B-Girl and two-time Red Bull BC One world champion.","tagText":"Breaking","imageURL":"https://img.redbull.com/images/c_crop,x_43,y_59,h_1885,w_2828/c_fill,w_380,h_253/q_auto,f_auto/redbullcom/2021/2/2/muzrj6ron5wtzpscokb6/kastet-portrait-folded-hands","imgTitle":"B-Girl Kastet joins the Red Bull BC One All Stars","uriSlug":"b-girl-kastet-facts-portrait"},
                    {"id":"c11bf1e3-b575-416e-bef8-c0105c1261e7","title":"10 times the Red Bull BC One All Stars owned the last decade","desc":"Check out our special 10-year anniversary clip and read up on more iconic moments from the history of the Red Bull BC One All Stars.","tagText":"Breaking","imageURL":"https://img.redbull.com/images/c_crop,x_43,y_59,h_1885,w_2828/c_fill,w_380,h_253/q_auto,f_auto/redbullcom/2018/01/11/4fd2b23a-d56c-40f0-956e-c14ae0c86e64/red-bull-bc-one-all-stars-in-salzburg","imgTitle":"The Red Bull BC One All Stars","uriSlug":"red-bull-bc-one-all-stars-10-year-anniversary"},
                ],
            })
        }
    }

    componentDidMount(){
        this.getStory()
    }

    render() {
        const {sectionTitle,sectionDesc} = this.state
        return (
            <div className="story-slider-wrapper">
                <ImageSlider sliderClassName="one-forth-slider">
                    <div className="section-info">
                        <div className="section-title"><h2>{sectionTitle}</h2></div>
                        <div className="section-desc">{sectionDesc}</div>
                    </div>
                    <StoryCard key={"story-slider-empty-01"} />
                    <StoryCard key={"story-slider-empty-02"} />
                    {
                        this.state.stories.map( story => 
                            <StoryCard key={story.id} {...story}  />
                        )
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