import React, { Component } from 'react'
import axios from 'axios'
import CardFeed from '../../components/CardFeed'
import FeedCard from '../../components/CardFeed/FeedCard'
import Share from '../../components/Share'
import './index.css'

export default class Breaker extends Component {

    state = {
        breakers : [],
    }


    getBreaker = async () => {
        try {
            const url = "http://localhost:5000/v3/api/graphql/v1/v3/feed/en-INT/related-to/rrn:content:collections:5b15e3af-6851-4519-8686-1c2b823cd083:en-INT"
            const params = {
                "filter[type]" : "person-profiles",
                "scoring" : "featured",
                "disableUsageRestrictions" : true,
                "rb3Schema" : "v1:cardList",
                "includeDraft" : true,
                "includeUnpublished" : true,
                "spaces" : "redbull_com,redbullmusic",
            }
            
            const res = await axios.get(url,{params})
            const breakers = res.data["data"].map(breakers => {
                const {masterId:id,content:{title},location,quote,type,uriSlug,media} = breakers
                const {imageURL} = media.mainImage.imageEssence
                const newBreaker = {id,type,title,location,quote,imageURL,uriSlug}
                return newBreaker
            })
            this.setState({breakers})
        } catch {
            console.log("showing test data because not opening the proxy server.")
            this.setState({
                breakers:[
                    {"id":"98f5fde7-296b-44b9-8e94-178281abad4f","type":"artist","title":"Ami","location":{"place":"Japan","countryCode":"JP","countryName":"Japan","precision":"address"},"quote":"Be yourself – do the thing that YOU want to, and enjoy it","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2019/09/30/c103ae90-8d61-4121-a929-fef6be5936bb/b-girl-ami","uriSlug":"bgirl-ami"},
                    {"id":"0cb13374-559a-4d26-9c01-7a45564eaf32","type":"artist","title":"Hong 10","location":{"place":"South Korea","countryCode":"KR","countryName":"South Korea","precision":"country"},"quote":"Always be the best that I can—no slacking!","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2014/12/08/1331694038268_2/hong-10","uriSlug":"bboy-hong-10"},
                    {"id":"d10b4af6-1aa2-48b2-b801-dfc820f84064","type":"artist","title":"Junior","location":{"place":"France","countryCode":"FR","countryName":"France","precision":"country"},"imageURL":"https://img.redbull.com/images/{op}/redbullcom/2020/2/18/mi8vvypflozp2rnnxvmc/b-boy-junior-durban-portrait","uriSlug":"junior"},
                    {"id":"f31fe256-932f-40fc-ae3d-fd91435f89cf","type":"artist","title":"Kastet","location":{"place":"Russia","countryCode":"RU","countryName":"Russia","precision":"country"},"quote":"My secret is I'm not afraid to lose.","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2021/2/3/qnoilwhmo1o1jwv0frff/kastet-portrait","uriSlug":"kastet"},
                    {"id":"20ed54a6-9818-4091-b562-f04debe16b79","type":"artist","title":"Lil G","location":{"place":"Venezuela","countryCode":"VE","countryName":"Venezuela","precision":"country"},"quote":"Do it from the heart!","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2020/4/15/azi3crmw9myei0ajvjwu/b-boy-lil-g","uriSlug":"lil-g-boy"},
                    {"id":"d3f53d24-cc6e-42bc-9d5a-5daa04d139a2","type":"artist","title":"Lil Zoo","location":{"place":"Austria","countryCode":"AT","countryName":"Austria","precision":"country"},"quote":"Train hard, be smart, be ready","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2020/11/23/bq1xgbdr2xoggplcpekd/red-bull-bc-one-world-final-2020-lil-zoo","uriSlug":"lil-zoo"},
                    {"id":"92316120-c42e-4678-9ea2-a6c75d3599b4","type":"artist","title":"Lilou","location":{"place":"France","countryCode":"FR","countryName":"France","precision":"country"},"imageURL":"https://img.redbull.com/images/{op}/redbullcom/2020/4/15/g0b0ptvhg6a7l3us8aje/b-boy-lilou","uriSlug":"lilou"},
                    {"id":"8c6f189b-463e-4bbd-b379-bc70f2b6030c","type":"artist","title":"Logistx","location":{"place":"United States","countryCode":"US","countryName":"United States","precision":"country"},"imageURL":"https://img.redbull.com/images/{op}/redbullcom/2019/10/10/fd3cd762-456e-4f56-a602-98b15d0f11c0/red-bull-rising-talent-2019-logistx-portrait","uriSlug":"logistx"},
                    {"id":"c19d6149-917a-49f0-b082-1da538b1e65d","type":"artist","title":"Menno van Gorp","location":{"place":"Netherlands","countryCode":"NL","countryName":"Netherlands","precision":"country"},"quote":"Love the life you live, so you can live the life you love","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2018/09/14/2b4975b2-c45c-4e03-b1dd-798a78e516a4/red-bull-bc-one-all-star-menno","uriSlug":"menno-van-gorp"},
                ],
            })
        }

    }

    componentDidMount(){
        this.getBreaker()
    }

    render() {
        return (
            <div className="breaker-wrapper">
                <div className="breaker">
                    <h2 className="breaker-title">Red Bull BC One All Stars</h2>
                    <CardFeed>
                        {
                            this.state.breakers.map(breaker => <FeedCard {...breaker}/>)
                        }
                    </CardFeed>
                </div>
                <Share/>
            </div>
        )
    }
}
