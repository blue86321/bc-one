import React, { Component } from 'react'
import axios from 'axios'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardFeed from '../../components/CardFeed'
import FeedCard from '../../components/CardFeed/FeedCard'
import Share from '../../components/Share'
import './index.css'

export default class Video extends Component {

    state = {
        hasNext : true,
        ajaxPageOffset : 0,
        videos : [],

    }

    getVideo = async () => {
        try {
            const url = "http://localhost:5000/v3/api/graphql/v1/v3/feed/en-INT,en-INT"
            let params = {
                "disableUsageRestrictions" : true,
                "filter[relationships.tags]" : "rrn:content:tags:6ea05270-f885-47cf-bd06-c761e9d9bdff:en-INT",
                "page[limit]" : 6,
                "filter[type]" : "videos,live-videos",
                "spaces" : "redbull_com,rbtv",
                "rb3Schema" : "v1:cardList",
            }
            if (this.state.ajaxPageOffset > 0) params["page[offset]"] = this.state.ajaxPageOffset
            
            const res = await axios.get(url, {params})
            const {hasNext} = res.data["meta"]
            const asideCount = res.data["data"].length;
            const {ajaxPageOffset} = this.state
            this.setState({hasNext,ajaxPageOffset:ajaxPageOffset+asideCount})

            const videos = res.data["data"].map(vdo => {
                const {
                    masterId:id,type,uriSlug,content,media,event,location,duration
                } = vdo
                const {title,subHeading,standfirst:desc,tag} = content
                const {title:imageTitle,altText:imageAltText,imageEssence:{imageURL}} = media.mainImage
                if (media.videoPreviews[0]){
                    var vdo9x16_960 = media.videoPreviews.filter(vdo => (vdo.ratioTextual==="9x16" || vdo.height===960))
                    var vdo16x9_960 = media.videoPreviews.filter(vdo => (vdo.ratioTextual==="16x9" && vdo.width===960))
                    var videoURL = (vdo9x16_960.length > 0 && vdo9x16_960[0].clipURL) || (vdo16x9_960.length >0 && vdo16x9_960[0].clipURL)
                }
                if (tag) {
                    var {text:tagText} = tag
                }
                const newVideoObj = {
                    id,type,uriSlug,title,subHeading,desc,tagText,
                    imageTitle,imageAltText,imageURL,
                    event,location,videoURL,duration
                }
                return newVideoObj
            })
            this.setState({videos : [...this.state.videos, ...videos]})
        } catch {
            console.log("showing test data because not opening the proxy server.")
            this.setState({
                videos : [
                    ...this.state.videos,
                    {"id":"8bbcc87b-5b09-4b3e-ac51-235b5e1ddec3","type":"videoLive","uriSlug":"red-bull-bc-one-cypher-russia-2021","title":"Red Bull BC One Cypher Russia","subHeading":"Red Bull BC One 2021","desc":"This year, Red Bull BC One is set to find Russia's top B-Boy and B-Girl.","tagText":"Breaking","imageTitle":"Red Bull BC One Russia Cypher - Header Image","imageAltText":"Red Bull BC One","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2021/6/8/k4crvqotx82fjycotxid/red-bull-bc-one-russia-cypher-header-image","event":{"id":"rrn:content:event-profiles:ec0cab79-d24d-4a41-b27a-6ed3f8476ed1:en-INT","uriSlug":"red-bull-bc-one-cypher-russia"}},
                    {"id":"3441bff1-9bb0-4311-b489-4341f94d425d","type":"videoLive","uriSlug":"red-bull-bc-one-cypher-germany-2021","title":"Red Bull BC One Cypher Germany","subHeading":"Red Bull BC One 2021","desc":"Germany's eight best B-Girls and 16 B-Boys will battle each other at the most important breaking competition.","tagText":"Breaking","imageTitle":"Red Bull BC One Cypher Germany 2021 - Live Video","imageAltText":"Red Bull BC One","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2021/6/10/egdot9mpflw6jd6waljv/red-bull-bc-one-cypher-germany-2021-live-video","event":{"id":"rrn:content:event-profiles:34462a94-f5d4-4fe9-9275-3bfd514e09e5:en-INT","uriSlug":"red-bull-bc-one-cypher-germany"}},
                    {"id":"28c55d99-2855-4d1c-9924-202677e2d17e","type":"videoLive","uriSlug":"red-bull-bc-one-cypher-austria-2021","title":"Red Bull BC One Cypher Austria","subHeading":"Red Bull BC One 2021","desc":"The best B-Girls and B-Boys battle it out in the most important Austrian solo competition for breakers.","tagText":"Breaking","imageTitle":"BC One Cypher Vienna 2021 - live video","imageAltText":"BC One Cypher Vienna 2021 - live video","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2021/5/14/ru7mkajygd95bdno7ewd/bc-one-cypher-vienna-2021-live-video","event":{"id":"rrn:content:event-profiles:c9a9103e-fd7f-40e9-9f97-9d1afbfbff2e:en-INT","uriSlug":"red-bull-bc-one-cypher-austria"}},
                    {"id":"1d94dcfc-1b5c-408c-8cc9-1235ab5975df","type":"video","uriSlug":"red-bull-bc-one-world-final-2020-round-of-8-kastet-vs-mess","title":"Kastet vs Mess – round of 8","subHeading":"Red Bull BC One World Final 2020","desc":"B-Girls Kastet and Mess face off in a one-on-one battle for a chance to make it to the semi-finals.","tagText":"Breaking","imageTitle":"BC One World Final 2020 - round of 8 - Kastet vs Mess Art","imageAltText":"BC One World Final 2020 - round of 8 - Kastet vs Mess Art","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2020/12/3/dsw43oxazm760pjwr0yh/bc-one-world-final-2020-round-of-8-kastet-vs-mess-art","videoURL":"https://cs.liiift.io/v1/RBMN/pd/2/64/7H/RF/N5/BH/11/FO-2647HRFN5BH11.mp4","duration":269},
                    {"id":"8f08f9ee-cf11-4a7d-ab32-d7f55f094bd2","type":"video","uriSlug":"red-bull-bc-one-world-final-2020-round-of-8-ayane-vs-kami","title":"Ayane vs Kami – round of 8","subHeading":"Red Bull BC One World Final 2020","desc":"B-Girls Ayane and Kami face off in a one-on-one battle for a chance to make it to the semi-finals.","tagText":"Breaking","imageTitle":"BC One World Final 2020 - round of 8 - Ayane vs Kami Art","imageAltText":"BC One World Final 2020 - round of 8 - Ayane vs Kami Art","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2020/12/3/mif69j4mege9sohdfo0j/bc-one-world-final-2020-round-of-8-ayane-vs-kami-art","videoURL":"https://cs.liiift.io/v1/RBMN/pd/2/64/7H/2G/CH/BH/11/FO-2647H2GCHBH11.mp4","duration":334},
                    {"id":"654c3be1-aded-470c-970b-e2bafb4fcbd1","type":"video","uriSlug":"red-bull-bc-one-world-final-2020-round-of-8-jilou-vs-sina","title":"Jilou vs Sina – round of 8","subHeading":"Red Bull BC One World Final 2020","desc":"B-Girls Jilou and Sina face off in a one-on-one battle for a chance to make it to the semi-finals.","tagText":"Breaking","imageTitle":"BC One World Final 2020 - round of 8 - Jilou vs Sina Art","imageAltText":"BC One World Final 2020 - round of 8 - Jilou vs Sina Art","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2020/12/3/agxuqaqhwn1sgl7stwo6/bc-one-world-final-2020-round-of-8-jilou-vs-sina-art","videoURL":"https://cs.liiift.io/v1/RBMN/pd/2/64/7A/JV/DD/BH/11/FO-2647AJVDDBH11.mp4","duration":285},
                ],
            })
        }
    }

    moreVideo = () => {
        this.state.hasNext && this.getVideo();
    }

    componentDidMount(){
        this.getVideo()
    }

    render() {
        return (
            <div className="video-wrapper">
                <div className="video">
                    <CardFeed>
                        {
                            this.state.videos.map(vdo => <FeedCard key={vdo.id} {...vdo}/>)
                        }
                    </CardFeed>
                    <button className="more-btn" onClick={this.moreVideo}><MoreVertIcon style={{color:"#fff"}}/>Load more</button>
                </div>
                <Share/>
            </div>
        )
    }
}
