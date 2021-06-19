import React, { Component } from 'react'
import axios from 'axios'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardFeed from '../CardFeed'
import FeedCard from '../CardFeed/FeedCard'
import './index.css'


export default class Aside extends Component {

    state = {
        hasNext : true,
        ajaxPageOffset : 0,
        asideCards : [],
    }

    getAjaxData = async () => {
        try {

            const url = "http://localhost:5000/v3/api/graphql/v1/v3/feed/en-INT/related-to/rrn:slug:event-series:bc-one"
            let params = {
                "filter[type]" : "stories,videos,videos-360,image-galleries,project-profiles,event-profiles,films,person-profiles,externals,collections,shows,episode-videos,trailer-videos,recap-videos,live-videos,games,commercials,event-series,audio-episodes,audio-series",
                "filter[subType][not]" : "playlist",
                "page[limit]" : 12,
                "scoring" : "masonry",
                "rb3Schema" : "v1:cardList",
            }
            if (this.state.ajaxPageOffset > 0) params["page[offset]"] = this.state.ajaxPageOffset
            const res = await axios.get(url, {params})
            const {hasNext} = res.data["meta"]
            const asideCount = res.data["data"].length;
            const {ajaxPageOffset} = this.state
            this.setState({hasNext,ajaxPageOffset:ajaxPageOffset+asideCount})

            const asidesCards = res.data["data"].map(aside => {
                const {
                    masterId:id,type,uriSlug,content,media,  // common
                    event,location,logo,  // event
                    duration  // eposide, video
                } = aside
                const {title,subHeading,standfirst:desc,tag} = content
                const {title:imageTitle,altText:imageAltText,imageEssence:{imageURL}} = media.mainImage
                if (media.videoPreviews[0]){
                    var vdo9x16_960 = media.videoPreviews.filter(vdo => (vdo.ratioTextual==="9x16" || vdo.height===960))
                    var vdo16x9_960 = media.videoPreviews.filter(vdo => (vdo.ratioTextual==="16x9" && vdo.width===960))
                    var videoURL = (vdo9x16_960.length > 0 && vdo9x16_960[0].clipURL) || (vdo16x9_960.length >0 && vdo16x9_960[0].clipURL)
                }
                if (logo) {
                    var {title:logoTitle,altText:logoAltText,imageEssence:{imageURL:logoURL}} = logo
                }
                if (tag) {
                    var {text:tagText} = tag
                }
                const newAisdeObj = {
                    id,type,uriSlug,title,subHeading,desc,tagText,
                    imageTitle,imageAltText,imageURL,
                    event,location,logoTitle,logoAltText,logoURL,
                    videoURL,duration
                }
                return newAisdeObj
            })
            this.setState({asideCards:[...this.state.asideCards, ...asidesCards]})
        } catch {
            console.log("showing test data because not opening the proxy server.")
            this.setState({
                asideCards : [
                    ...this.state.asideCards,
                    {"id":"2fb57fd8-0d87-482d-80c6-ff6d8118ec9b","type":"event","uriSlug":"red-bull-bc-one-battle-x-germany","title":"Red Bull BC One Battle-X Germany","desc":"Featuring the most legendary international match-ups, Red Bull BC One Battle-X is a secret battle held all around the world.","tagText":"Breaking","imageTitle":"Red Bull BC One Battle X Hero Art","imageAltText":"Red Bull BC One Battle X Hero Art","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2020/10/27/w2fo1cy3yuaounuvegoq/red-bull-bc-one-battle-x-hero-art","event":{"startDate":"2021-06-08T20:00:00+02:00","endDate":"2021-06-08T23:00:00+02:00"},"location":{"place":"Berlin","countryCode":"DE","countryName":"Germany","precision":"address"},"logoTitle":"Red Bull BC One Battle-X Logo","logoAltText":"Red Bull BC One Battle-X Logo","logoURL":"https://img.redbull.com/images/{op}/redbullcom/2020/10/27/nrc4broy4oolckgknyjw/red-bull-bc-one-battle-x-logo"},
                    {"id":"28c55d99-2855-4d1c-9924-202677e2d17e","type":"videoLive","uriSlug":"red-bull-bc-one-cypher-austria-2021","title":"Red Bull BC One Cypher Austria","subHeading":"Red Bull BC One 2021","desc":"The best B-Girls and B-Boys battle it out in the most important Austrian solo competition for breakers.","tagText":"Breaking","imageTitle":"BC One Cypher Vienna 2021 - live video","imageAltText":"BC One Cypher Vienna 2021 - live video","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2021/5/14/ru7mkajygd95bdno7ewd/bc-one-cypher-vienna-2021-live-video","event":{"id":"rrn:content:event-profiles:c9a9103e-fd7f-40e9-9f97-9d1afbfbff2e:en-INT","uriSlug":"red-bull-bc-one-cypher-austria"}},
                    {"id":"2a76da9c-cd1a-47ee-9bb4-675e081a8720","type":"story","uriSlug":"red-bull-bc-one-e-battle-2021-top-8","title":"Who will battle in the Top 8 of the Red Bull BC One E-Battle 2021?","desc":"These B-Girls and B-Boys won their Top 16 matchup in the 2021 Red Bull BC One E-Battle to advance to the Top 8 and compete in the final show.","tagText":"Breaking","imageTitle":"Alkolil and Madmax at a shooting in Salzburg","imageAltText":"Alkolil does an airfreeze while Madmax films him with an iphone.","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2021/6/8/gvflodoozbhjmgj64bcq/alkolil-madmax-e-battle"},
                    {"id":"eb88b150-59bc-4d63-80b2-17e278c19736","type":"video","uriSlug":"red-bull-bc-one-battle-x-2021-germany-event-highlights","title":"Battle highlights – Munich","subHeading":"Red Bull BC One Battle-X 2021","desc":"No judges. No round limits. Just all-out battles. Watch some of the biggest match-ups duel in Munich.","tagText":"Breaking","imageTitle":"Battle X Germany Event Highlight","imageAltText":"Battle X Germany Event Highlight","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2021/6/7/kzuphhroscpszmijxper/battle-x-germany-event-highlight","videoURL":"https://cs.liiift.io/v1/RBMN/pd/2/7X/G7/AQ/VS/BH/12/FO-27XG7AQVSBH12.mp4","duration":3042},
                    {"id":"fdf15e88-e7ff-4c21-82a6-284f04a2f032","type":"story","uriSlug":"red-bull-bc-one-ebattle-top-16","title":"One of these breakers will be your 2021 Red Bull BC One E-battle champ","desc":"From hundreds of online entries, the judges have selected the top 16 B-Girls and B-Boys to compete for a shot at the 2021 Red Bull BC One E-Battle crowns.","tagText":"Breaking","imageTitle":"Kastet captures some Madmax style","imageAltText":"B-Girl Madmax performs in front of the camera for the Red Bull BC One E-Battle 2021 at the LivingRoom in Salzburg, Austria on February 9, 2020","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2021/5/22/chdm2rvbnoy9pcc4kxcu/madmax-kastet"},
                    {"id":"03c7aadc-6713-5997-bf54-710031363a4d","type":"episode","uriSlug":"breaks-beats-n-b-boys-a-history-of-s01-e06","title":"Breaks, beats and B-Boys","subHeading":"A History of... S1 E6","desc":"The story of breakdancing's premier contest series, Red Bull BC One, spans generations of hip-hop culture.","tagText":"Dance","imageTitle":"AP-1MRCVTFNS1W11-featureMedia","imageAltText":"AP-1MRCVTFNS1W11-featureMedia","imageURL":"https://img.redbull.com/images/{op}/redbullcom/tv/FO-1Q62U18892111/FO-1Q62U18892111-featureMedia","videoURL":"https://cs.liiift.io/v1/RBMN/pd/1/QS/9F/73/4S/1W/11/FO-1QS9F734S1W11.mp4","duration":1589},
                    {"id":"0cabe8d4-873b-4948-ae26-40d1092e4b8d","type":"event","uriSlug":"bc-one-belgium","title":"Red Bull BC One Cypher Belgium","desc":"The 10th edition of Red Bull BC One Cypher Belgium is on!","tagText":"Breaking","imageTitle":"Red Bull BC One Cypher Belgium","imageAltText":"Red Bull BC One Cypher Belgium Key Visual","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2021/3/8/x6xhgyu5fvv2z5occhuz/bc-one","event":{"startDate":"2021-05-22T19:00:00Z","endDate":"2021-05-22T22:00:00Z"},"location":{"place":"Danspunt, Gent","countryCode":"BE","countryName":"Belgium","precision":"address"},"logoTitle":"Red Bull BC One Cypher Belgium","logoAltText":"Red Bull BC One Cypher Belgium","logoURL":"https://img.redbull.com/images/{op}/redbullcom/2021/4/28/tpmziayihgvgl9lu1mxx/bc-one-cypher-belgium-logo"},
                    {"id":"8a6ba359-052e-4270-8026-62463b3841a2","type":"video","uriSlug":"red-bull-bc-one-announcement-clip-2020","title":"The Red Bull BC One World Final  takes flight in Austria","subHeading":"Red Bull BC One World Final 2020","desc":"The 17th edition of the Red Bull BC One World Final will go down in Salzburg, Austria, on November 28, 2020.","tagText":"Dance","imageTitle":"Red Bull BC One Announcement Clip Art","imageAltText":"Red Bull BC One Announcement Clip Art","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2020/10/20/zv05ompi9lm8qve0ttis/red-bull-bc-one-announcement-clip-art","videoURL":"https://cs.liiift.io/v1/RBMN/pd/2/5P/DK/UZ/BW/BH/12/FO-25PDKUZBWBH12.mp4","duration":88},
                    {"id":"1a21e9c9-f856-45c4-8be3-60b04e795fa4","type":"story","uriSlug":"red-bull-bc-one-2021-announcement","title":"2 whole days of Red Bull BC One World Finals in Gdańsk? Yes please","desc":"The 18th edition of the prestigious breaking competition will take place for the first time in Gdańsk, Poland, on November 5 and 6.","tagText":"Breaking","imageTitle":"The Red Bull BC One World Final 2021 is coming to Gdańsk, Poland","imageAltText":"The venue for the announcement clip of the Red Bull BC One World Final 2021 in Gdańsk, Poland on September 24, 2020.","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2021/2/25/xxi71nggkyd905ifgwnu/red-bull-bc-one-2021-gdansk-circle","videoURL":"https://cs.liiift.io/v1/RBMN/pd/2/6X/MK/R9/DD/BH/11/FO-26XMKR9DDBH11.mp4"},
                    {"id":"783647ea-3b0d-4443-a077-1db0a4f2614e","type":"film","uriSlug":"breaking-in-india-dance-film","title":"Breaking New Ground","subHeading":"India’s dance revolution","desc":"With an ever-growing scene, get to know how breaking became such a passionate movement in India.","tagText":"Dance","imageTitle":"breakingnewground_cover_portrait","imageAltText":"breakingnewground_cover_portrait","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2019/10/28/282d034d-b5c4-4786-9290-e49f55ef8795/breakingnewground_cover_portrait","videoURL":"https://cs.liiift.io/v1/RBMN/pd/2/21/5P/M9/2N/BH/11/FO-2215PM92NBH11.mp4","duration":2428},
                    {"id":"8b50567e-7c5b-40f1-9856-8503d6eb3975","type":"video","uriSlug":"red-bull-bc-one-world-final-2021-poland-announcement-clip","title":"Red Bull BC One World Final 2021 location revealed","subHeading":"Red Bull BC One World Final 2021","desc":"For its 18th edition, Red Bull BC One brings the world's biggest one-on-one breaking competition to Poland.","tagText":"Dance","imageTitle":"BC One World Final 2021 Announcement Clip Art","imageAltText":"BC One World Final 2021 Announcement Clip Art","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2021/2/24/fr6c7lj4mwhwcpd2cic0/bc-one-world-final-2021-announcement-clip-art","videoURL":"https://cs.liiift.io/v1/RBMN/pd/2/6X/MK/R9/DD/BH/11/FO-26XMKR9DDBH11.mp4","duration":110},
                    {"id":"c9a9103e-fd7f-40e9-9f97-9d1afbfbff2e","type":"event","uriSlug":"red-bull-bc-one-cypher-austria","title":"Red Bull BC One Cypher Austria","desc":"The best B-Girls and B-Boys battle it out in the most important Austrian solo competition for breakers.","tagText":"Breaking","imageTitle":"BC One Cypher Vienna 2021","imageAltText":"BC One Cypher Vienna 2021","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2021/5/14/xbcqr1yikwkovynynjvo/bc-one-cypher-vienna-2021","event":{"startDate":"2021-05-22T00:00:00+02:00","endDate":"2021-05-22T23:00:00+02:00"},"location":{"place":"Vienna","countryCode":"AT","countryName":"Austria","precision":"address"},"logoTitle":"Red Bull BC One Cypher Austria Logo 2021","logoAltText":"Red Bull BC One Cypher Austria Logo 2021","logoURL":"https://img.redbull.com/images/{op}/redbullcom/2021/5/5/xhgk3tpixjaxujssivac/red-bull-bc-one-cypher-austria-logo-2021"},
                ],
            })
    
        }
    }

    moreAside = () => {
        this.state.hasNext && this.getAjaxData()
    }

    componentDidMount(){
        this.getAjaxData()
    }

    render() {
        return (
            <div className="aside-wrapper">
                <h2>More like this</h2>

                <CardFeed>
                    {
                        this.state.asideCards.map(card => <FeedCard key={card.id} {...card} />)
                    }
                </CardFeed>
                <button className="more-btn" onClick={this.moreAside}><MoreVertIcon style={{color:"#fff"}}/>Load more</button>
            </div>
        )
    }
}
