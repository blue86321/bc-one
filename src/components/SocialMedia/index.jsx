import axios from 'axios'
import React, { Component } from 'react'
import './index.css'


export default class SocialMedia extends Component {

    state = {
        socialLink : [],
    }

    getSocialLink = async () => {
        try {
            const url = "http://localhost:5000/v3/api/graphql/v1/v3/query/en-INT";
            const params = {
                "filter[type]" : "event-series",
                "filter[uriSlug]" : "bc-one",
                "sort" : "-startDate",
                "page[limit]" : 1,
                "rb3Schema" : "v1:socialFollow",
            }
            const res = await axios.get(url, {params})
            const twitterHrefPrefix = "https://twitter.com/intent/follow?screen_name=";
            const socialLink = res.data["data"]["buttons"].map(contact => {
                const {platform} = contact
                const href = contact.platform === "twitter" ? twitterHrefPrefix+contact.username : contact.href
                return {platform, href}
            })
            this.setState({socialLink})
        } catch {
            console.log("showing test data because not opening the proxy server.")
            this.setState({
                socialLink : [
                    {"platform":"facebook","href":"https://www.facebook.com/redbullBCOne"},
                    {"platform":"instagram","href":"https://www.instagram.com/redbullBCOne"},
                    {"platform":"twitter","href":"https://twitter.com/intent/follow?screen_name=redbullBCOne"},
                ],
            })
        }
    }

    componentDidMount(){
        this.getSocialLink()
    }

    render() {
        return (
            <div className="social-media-wrapper">
                <h2>Want to see more Red Bull BC One?</h2>                
                <div className="social-media-links">
                    {
                        this.state.socialLink.map(social => (
                            <a key={social.platform} className={social.platform} href={social.href} target="_blank" rel="noreferrer">
                                <span className="social-icon"></span>
                                <span className="social-text">Follow</span>
                            </a>
                        ))
                    }
                </div>
            </div>
        )
    }
}
