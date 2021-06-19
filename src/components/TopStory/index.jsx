import React, { Component } from 'react'
import axios from 'axios'
import topStoryImg from '../../assets/images/top-story.webp'
import './index.css'

export default class TopStory extends Component {

    state = {
        topStory : {},
    }

    getTopStory = async () => {
        try {
            const url = "http://localhost:5000/v3/api/graphql/v1/v3/feed/en-INT%3Een-INT/related-to/rrn:content:event-series:ae51bd1a-19d3-4050-ac35-837c734ea1bb"
            const params = {
                "scoring":"featured",
                "score.featured.localeMixing":"en-INT",
                "score.featured.subType":"featured",
                "disableUsageRestrictions":true,
                "rb3Schema":"v1:hubHeroContent",
            }
            const res = await axios.get(url, {params})
            const {title, standfirst:desc, tag, reference:{uriSlug}} = res.data["data"]
            const topStory = {title, desc, tag, uriSlug}
            this.setState({topStory})
        } catch {
            console.log("showing test data because not opening the proxy server.")
            this.setState({
                topStory : {
                    title : 'Who will battle in the Top 8 of the Red Bull BC One E-Battle 2021?',
                    desc : 'These B-Girls and B-Boys won their Top 16 matchup in the 2021 Red Bull BC One E-Battle to advance to the Top 8 and compete in the final show.',
                    tag : 'BREAKING',
                    uriSlug : 'red-bull-bc-one-e-battle-2021-top-8',
                }
            })
        }
    }

    componentDidMount(){
        this.getTopStory()
    }

    render() {
        const {title, desc, tag, uriSlug} = this.state.topStory
        return (
            <div className="top-story-wrapper">
                <div className="top-story">
                    <div className="top-story-img-wrapper">
                        <img src={topStoryImg} alt="top-story" />
                    </div>
                    <div className="story-content">
                        <div className="content">
                            <h4 className="title">{title}</h4>
                            <p className="desc">{desc}</p>
                        </div>
                        <footer className="top-story-footer">
                            <div className="tag">{tag}</div>
                            <a href={"https://www.redbull.com/int-en/"+uriSlug} className="read-btn">Read Story</a>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}
