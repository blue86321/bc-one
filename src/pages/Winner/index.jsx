import React, { Component } from 'react'
import axios from 'axios'
import { ArtistCard } from '../../components/Card'
import './index.css'

export default class Winner extends Component {

    state = {
        titleArr : [],
        winners : {},
        winnerYearMap : {
            2020 : "f9985583-22c2-4184-9048-5421c8bec877",
            2019 : "96915606-84fc-40ae-afdc-8cfd186256e9",
            2018 : "d42b5e1d-d5f9-4579-bc92-78e1b44da950",
            2017 : "d77e80f5-f961-467e-b465-8687049307b6",
            2016 : "d0877107-1245-4957-84de-0dc114f4fe10",
            2015 : "fbd506b7-f7b1-48ab-a0be-ce641d65d674",
            2014 : "9e826bac-c07d-490e-ac6c-cc67e7537539",
            2013 : "ac9ed005-60e8-464f-ac3a-dc1ff8a12b50",
            2012 : "827a22d3-0c7c-4076-8ad8-335d574fd142",
            2011 : "1aeb4ddd-0f50-4a09-bade-8073a94409d7",
            2010 : "ca1246b3-ce4c-4cfc-b22d-6e35e69062bd",
            2009 : "0ff1351a-7b3f-4773-8dbf-cd8227421f46",
            2008 : "fb8b0fec-c34f-414b-8b90-e8efcdc7fddb",
            2007 : "dd6ad9eb-3c45-49a6-b8ef-383311d36bcf",
            2006 : "06a11046-ac71-41b9-a237-44685b143dc2",
            2005 : "cb34106d-4e5f-42e5-8153-489faf05a785",
            2004 : "412163b5-dd13-455d-92b4-d69a10e5c16e",
        },
        winnerOP : "c_crop,x_384,y_190,h_1750,w_1312/c_fill,w_380,h_543/q_auto,f_auto",
    }

    getTitle = async () => {
        try {
            const url = "http://localhost:5000/v3/api/graphql/v1/v3/feed/en-INT%3Een-INT/related-to/rrn:slug:event-series:bc-one"
            const params = {
                "scoring" : "featured",
                "score.featured.subType" : "champions",
                "score.featured.localeMixing" : "en-INT",
                "disableUsageRestrictions" : true,
                "rb3Schema" : "v1:editorialCollection",
            }
            const res = await axios.get(url, {params})
            const titleArr = res.data["data"].map(heading => heading.title)
            this.setState({titleArr})
        } catch {
            console.log("showing test data because not opening the proxy server.")

            this.setState({
                titleArr : [
                    "2020 🇦🇹 Austria, Salzburg",
                    "2019 🇮🇳 India, Mumbai",
                    "2018 🇨🇭 Switzerland, Zurich",
                    "2017 🇳🇱 Netherlands, Amsterdam",
                    "2016 🇯🇵 Japan, Nagoya",
                    "2015 🇮🇹 Italy, Rome",
        
                ],
            })
        }
    }

    getWinner = () => {
        for (let year = 2020; year >= 2004; year--) {
            const yearParam = this.state.winnerYearMap[year]
            const url = `http://localhost:5000/v3/api/graphql/v1/v3/feed/en-INT%3Een-INT/related-to/rrn:content:collections:${yearParam}:en-INT`
            const params = {
                "filter[type]" : "stories,videos,videos-360,image-galleries,project-profiles,event-profiles,films,person-profiles,externals,collections,shows,episode-videos,trailer-videos,recap-videos,live-videos,games,commercials,event-series,audio-episodes,audio-series",
                "scoring" : "featured",
                "score.featured.localeMixing" : "en-INT>en-INT",
                "disableUsageRestrictions" : true,
                "page[limit]" : 20,
                "rb3Schema" : "v1:cardList",
            }
            axios.get(url,{params}).then(res => {
                if (res.data["data"].length === 0) return
                const winnerThisYear = res.data["data"].map(winner => {
                    const {masterId:id,content:{title,tag:{tagText}},location,quote,type,uriSlug,media} = winner
                    let {imageURL} = media.mainImage.imageEssence
                    imageURL = imageURL.replace("{op}", this.state.winnerOP)
                    const newWinner = {id,type,title,location,quote,imageURL,uriSlug,tagText}
                    return newWinner
                })
                let winnersObj = {...this.state.winners}
                winnersObj[year] = winnerThisYear
                this.setState({winners : winnersObj})
            }, reason => {
                console.log("showing test data because not opening the proxy server.")
                this.setState({
                    winners : {
                        2020 : [
                            {"id":"f31fe256-932f-40fc-ae3d-fd91435f89cf","type":"artist","title":"Kastet","location":{"place":"Russia","countryCode":"RU","countryName":"Russia","precision":"country"},"quote":"My secret is I'm not afraid to lose.","imageURL":"https://img.redbull.com/images/c_crop,x_384,y_190,h_1750,w_1312/c_fill,w_380,h_543/q_auto,f_auto/redbullcom/2021/2/3/qnoilwhmo1o1jwv0frff/kastet-portrait","uriSlug":"kastet","tagText":"Breaking"},
                            {"id":"247d2b3c-366a-4541-8c67-afdd900d45d0","type":"artist","title":"Shigekix","location":{"place":"Japan","countryCode":"JP","countryName":"Japan","precision":"address"},"imageURL":"https://img.redbull.com/images/c_crop,x_384,y_190,h_1750,w_1312/c_fill,w_380,h_543/q_auto,f_auto/redbullcom/2020/11/25/fpa0co70ke02wm5b5tqp/red-bull-bc-one-2020-shigekix","uriSlug":"shigekix","tagText":"Breaking"},
                        ],
                        2019 : [
                            {"id":"c19d6149-917a-49f0-b082-1da538b1e65d","type":"artist","title":"Menno van Gorp","location":{"place":"Netherlands","countryCode":"NL","countryName":"Netherlands","precision":"country"},"quote":"Love the life you live, so you can live the life you love","imageURL":"https://img.redbull.com/images/c_crop,x_384,y_190,h_1750,w_1312/c_fill,w_380,h_543/q_auto,f_auto/redbullcom/2018/09/14/2b4975b2-c45c-4e03-b1dd-798a78e516a4/red-bull-bc-one-all-star-menno","uriSlug":"menno-van-gorp","tagText":"Breaking"},
                            {"id":"f31fe256-932f-40fc-ae3d-fd91435f89cf","type":"artist","title":"Kastet","location":{"place":"Russia","countryCode":"RU","countryName":"Russia","precision":"country"},"quote":"My secret is I'm not afraid to lose.","imageURL":"https://img.redbull.com/images/c_crop,x_384,y_190,h_1750,w_1312/c_fill,w_380,h_543/q_auto,f_auto/redbullcom/2021/2/3/qnoilwhmo1o1jwv0frff/kastet-portrait","uriSlug":"kastet","tagText":"Breaking"},
                        ],
                        2018 : [
                            {"id":"98f5fde7-296b-44b9-8e94-178281abad4f","type":"artist","title":"Ami","location":{"place":"Japan","countryCode":"JP","countryName":"Japan","precision":"address"},"quote":"Be yourself – do the thing that YOU want to, and enjoy it","imageURL":"https://img.redbull.com/images/c_crop,x_384,y_190,h_1750,w_1312/c_fill,w_380,h_543/q_auto,f_auto/redbullcom/2019/09/30/c103ae90-8d61-4121-a929-fef6be5936bb/b-girl-ami","uriSlug":"bgirl-ami","tagText":"Breaking"},
                            {"id":"d3f53d24-cc6e-42bc-9d5a-5daa04d139a2","type":"artist","title":"Lil Zoo","location":{"place":"Austria","countryCode":"AT","countryName":"Austria","precision":"country"},"quote":"Train hard, be smart, be ready","imageURL":"https://img.redbull.com/images/c_crop,x_384,y_190,h_1750,w_1312/c_fill,w_380,h_543/q_auto,f_auto/redbullcom/2020/11/23/bq1xgbdr2xoggplcpekd/red-bull-bc-one-world-final-2020-lil-zoo","uriSlug":"lil-zoo","tagText":"Breaking"},
                        ],
                        2017 : [
                            {"id":"c19d6149-917a-49f0-b082-1da538b1e65d","type":"artist","title":"Menno van Gorp","location":{"place":"Netherlands","countryCode":"NL","countryName":"Netherlands","precision":"country"},"quote":"Love the life you live, so you can live the life you love","imageURL":"https://img.redbull.com/images/c_crop,x_384,y_190,h_1750,w_1312/c_fill,w_380,h_543/q_auto,f_auto/redbullcom/2018/09/14/2b4975b2-c45c-4e03-b1dd-798a78e516a4/red-bull-bc-one-all-star-menno","uriSlug":"menno-van-gorp","tagText":"Breaking"},
                        ],
                        2015 : [
                            {"id":"6bcf06e9-8bcc-4b03-ac4b-eabab6e92caf","type":"artist","title":"Victor Montalvo","location":{"place":"United States","countryCode":"US","countryName":"United States","precision":"country"},"quote":"If you believe you will achieve","imageURL":"https://img.redbull.com/images/c_crop,x_384,y_190,h_1750,w_1312/c_fill,w_380,h_543/q_auto,f_auto/redbullcom/2020/4/15/gze2o8bt6oe6xsrb1a4p/b-boy-victor","uriSlug":"victor-montalvo","tagText":"Breaking"},
                        ]
                    },
                })
            })
        }
    }

    componentDidMount(){
        this.getTitle();
        this.getWinner();
    }

    render() {
        const {titleArr} = this.state
        return (
            <div className="winner-wrapper">
                <div className="winner">
                    {
                        titleArr.map(title => {
                            const year = title.slice(0,4)
                            const winner = this.state.winners[year]
                            if (winner) {
                                return (
                                    <div className="winner-year">
                                        <div className="title">{title}</div>
                                        <div className="person-wrapper">
                                            {winner.map(person => <div className="person"><ArtistCard key={year+person.id} {...person}/></div>)}
                                        </div>
                                    </div>
                                )
                            } else {
                                return ""
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}
