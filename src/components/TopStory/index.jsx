import React, { Component } from 'react'
import axios from 'axios'
import topStoryImg from '../../common/images/top-story.webp'
import './index.css'

export default class TopStory extends Component {

    state = {
        topStory : {
            title : '1234',
            desc : '1234',
            tag : '1234'
        }
    }

    componentDidMount(){

        // // ajax data, need to open the proxy server (src/common/server/server.js)
        // const url = "http://localhost:5000/v3/api/graphql/v1/v3/feed/en-INT%3Een-INT/related-to/rrn:content:event-series:ae51bd1a-19d3-4050-ac35-837c734ea1bb"
        // axios.get(url).then(res=>{
        //     // console.log(res.data)
        //     console.log(res.data)
        //     console.log(typeof res.data)
        //     const {title, standfirst:desc, tag} = res.data.data
        //     this.setState({topStory:{title, desc, tag}})
        // })

        // axios.get("http://localhost:5000/test").then(res=>console.log(res.data),reason=>console.log(reason))

    }

    render() {
        const {title, desc, tag} = this.state.topStory
        return (
            <div className="top-story-wrapper light-theme">
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
                            <button className="read-btn theme-btn">Read Story</button>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}
