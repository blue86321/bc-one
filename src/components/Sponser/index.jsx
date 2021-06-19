import React, { Component } from 'react'
import axios from 'axios'
import sponserLogo from '../../assets/images/technics-logo-dark.png'
import './index.css'

export default class Sponser extends Component {
    
    state = {
        sponsers : [],
    }

    getSponser = async () => {
        try {
            const url = "http://localhost:5000/v3/api/graphql/v1/v3/query/en-INT"
            const params = {
                "filter[type]" : "event-series",
                "filter[uriSlug]" : "bc-one",
                "sort" : "-startDate",
                "page[limit]" : "1",
                "rb3Schema" : "v1:sponsors",
            }
            const res = await axios.get(url, {params})
            const sponsers = res.data["data"].map(
                eachSponser => {
                    const {title, link, logo:{id}} = eachSponser
                    const newSponser = {id,img:sponserLogo,title,link}
                    return newSponser
                }
            )
            this.setState({sponsers});
        } catch {
            console.log("showing test data because not opening the proxy server.")
            this.setState({
                sponsers : [
                    {id: "rrn:content:images:33a8d4c5-d703-40cb-8bab-506e9aa58841:en-INT", img: sponserLogo, title: "Technics", link: "https://www.technics.com/global/sl1200/collaboration/redbullbcone/"},
                ],
            })
        }
    }
    
    componentDidMount(){
        this.getSponser()
    }

    render() {
        return (
            <div className="sponser-wrapper">
                <div className="sponser-container">
                    <h2>Visit Our International Partner</h2>
                    <div className="sponser-list">
                        {
                            this.state.sponsers.map(sponser => (
                                <a key={sponser.id} href={sponser.link} rel="noreferrer" target="_blank">
                                    <img src={sponser.img} alt={sponser.title} />
                                </a>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
        )
    }
}
