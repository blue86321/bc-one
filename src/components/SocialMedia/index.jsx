import axios from 'axios'
import React, { Component } from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import facebookIcon from '../../common/images/facebookIcon.svg'
import './index.css'


export default class SocialMedia extends Component {

    state = {
        socialLink : [],
    }

    componentDidMount(){
        // // ajax
        // const url = "http://localhost:5000/v3/api/graphql/v1/v3/query/en-INT";
        // const params = {
        //     "filter[type]" : "event-series",
        //     "filter[uriSlug]" : "bc-one",
        //     "sort" : "-startDate",
        //     "page[limit]" : 1,
        //     "rb3Schema" : "v1:socialFollow",
        // }
        // axios.get(url, {params}).then(res => {
        //     const twitterHrefPrefix = "https://twitter.com/intent/follow?screen_name=";
        //     const socialLinkArray = [];
        //     res.data["data"]["buttons"].map(contact => {
        //         const {platform} = contact
        //         const href = contact.platform === "twitter" ? twitterHrefPrefix+contact.username : contact.href
        //         this.setState({socialLink:[...this.state.socialLink, {platform, href}]})
        //     })
        // })

        const platform = "facebook"
        const href = "https://www.facebook.com/redbullBCOne"
        this.setState({socialLink:[...this.state.socialLink, {platform, href}]})
    }

    render() {
        return (
            <div className="social-media-wrapper dark-theme">
                <h2>Want to see more Red Bull BC One?</h2>
                
                <div style={{backgroundImage:"url("+facebookIcon+")"}} />
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
