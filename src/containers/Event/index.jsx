import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ImageSlider from '../../components/ImageSlider'
import EventCard from '../../components/ImageSlider/EventCard'
import './index.css'

class Event extends Component {

    state = {
        upcomingEvents : [
            {"id":"rrn:content:event-profiles:1edd7851-12be-4861-a4f8-0bc5a5409876:en-INT","eventBadge":"replayAvailable","eventTitle":"Red Bull BC One E-Battle","eventTag":"Dance","startDate":"2021-04-29T00:00:00+02:00","endDate":"2021-06-26T23:55:00+02:00","img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/4/26/gexupdkiozdkckcrx38l/ebattle","logoTitle":"Bc One E-battle logo 2021","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/4/26/hqmv0rhsezk7qv18ohnb/e-battle","uriSlug":"bcone-ebattle"},
            {"id":"rrn:content:event-profiles:ae694d82-a25e-4231-b143-498644655aab:ru-RU","eventTitle":"Red Bull BC One Camp  Russia 2021","eventTag":"Breaking","startDate":"2021-06-11T00:00:00+03:00","endDate":"2021-06-13T00:00:00+03:00","location":{"place":"Хлебозавод","countryCode":"RU","countryName":"Россия","precision":"address"},"img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/4/20/yac9z36ss3rnuwshi4l1/red-bull-bc-one-camp-2021","logoTitle":"BC One Camp Russia","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/5/11/d4gkrvs7k03k5pwj58ol/bc-one","uriSlug":"red-bull-bc-one-camp-2021"},
            {"id":"rrn:content:event-profiles:48287afa-867e-454f-b51e-46d5fc9c2c25:pl-PL","eventTitle":"Red Bull BC One Cypher Poland","eventTag":"Dance","startDate":"2021-07-03T11:00:00Z","endDate":"2021-07-03T23:59:59Z","location":{"place":"Kraków","countryCode":"PL","countryName":"Poland","precision":"address"},"img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/2/24/bhttnkttuh0zih41qfyp/red-bull-bc-one-cypher-poland","logoTitle":"Red Bull BC One Cypher 2021 - Poland","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/2/24/zvn8pfqe5l6q2xs5onaq/bc-one-logo","uriSlug":"red-bull-bc-one-cypher-polska"},
        ],
        pastEvents : [
            {"id":"rrn:content:event-profiles:a85aef57-5e58-423a-9403-bea8de0fb8c4:fr-FR","eventTitle":"Red Bull BC One Cypher France","eventTag":"Breaking","startDate":"2021-05-29T00:00:00+03:00","endDate":"2021-05-30T00:00:00+02:00","location":{"place":"H7 à Lyon","countryCode":"FR","countryName":"France","precision":"address"},"img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/3/11/lszdz8watykvppucvvzd/red-bull-bc-one-cypher-france-2021-lyon","logoTitle":"Red Bull BC One Cypher France","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/5/19/jpae7f3cmdd9gvsrlbmj/logo-red-bull-bc-one-cypher-france"},
            {"id":"rrn:content:event-profiles:0cabe8d4-873b-4948-ae26-40d1092e4b8d:en-INT","eventTitle":"Red Bull BC One Cypher Belgium","eventTag":"Breaking","startDate":"2021-05-22T19:00:00Z","endDate":"2021-05-22T22:00:00Z","location":{"place":"Danspunt, Gent","countryCode":"BE","countryName":"Belgium","precision":"address"},"img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/3/8/x6xhgyu5fvv2z5occhuz/bc-one","logoTitle":"Red Bull BC One Cypher Belgium","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/4/28/tpmziayihgvgl9lu1mxx/bc-one-cypher-belgium-logo"},
            {"id":"rrn:content:event-profiles:c9a9103e-fd7f-40e9-9f97-9d1afbfbff2e:en-INT","eventBadge":"replayAvailable","eventTitle":"Red Bull BC One Cypher Austria","eventTag":"Breaking","startDate":"2021-05-22T00:00:00+02:00","endDate":"2021-05-22T23:00:00+02:00","location":{"place":"Vienna","countryCode":"AT","countryName":"Austria","precision":"address"},"img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/5/14/xbcqr1yikwkovynynjvo/bc-one-cypher-vienna-2021","logoTitle":"Red Bull BC One Cypher Austria Logo 2021","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/5/5/xhgk3tpixjaxujssivac/red-bull-bc-one-cypher-austria-logo-2021"},
            {"id":"rrn:content:event-profiles:93bfc341-0db5-42eb-857e-0b5c722b3af4:pl-PL","eventTitle":"Red Bull BC One Cypher Gdańsk","eventTag":"Dance","startDate":"2021-05-08T16:00:00Z","endDate":"2021-05-08T23:59:59Z","location":{"place":"Gdansk","countryCode":"PL","countryName":null,"precision":"address"},"img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/2/24/bhttnkttuh0zih41qfyp/red-bull-bc-one-cypher-poland","logoTitle":"Red Bull BC One Cypher Gdańsk 2021 - logo","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/2/24/ste3u7edsasfeukmkgao/bc-one-cypher"},
            {"id":"rrn:content:event-profiles:93bfc341-0db5-42eb-857e-0b5c722b3L","eventTitle":"Red Bull BC One Cypher Gdańsk","eventTag":"Dance","startDate":"2021-05-08T16:00:00Z","endDate":"2021-05-08T23:59:59Z","location":{"place":"Gdansk","countryCode":"PL","countryName":null,"precision":"address"},"img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/2/24/bhttnkttuh0zih41qfyp/red-bull-bc-one-cypher-poland","logoTitle":"Red Bull BC One Cypher Gdańsk 2021 - logo","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/2/24/ste3u7edsasfeukmkgao/bc-one-cypher"},
            {"id":"rrn:content:event-profiles:93bfc3","eventTitle":"Red Bull BC One Cypher Gdańsk","eventTag":"Dance","startDate":"2021-05-08T16:00:00Z","endDate":"2021-05-08T23:59:59Z","location":{"place":"Gdansk","countryCode":"PL","countryName":null,"precision":"address"},"img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/2/24/bhttnkttuh0zih41qfyp/red-bull-bc-one-cypher-poland","logoTitle":"Red Bull BC One Cypher Gdańsk 2021 - logo","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/2/24/ste3u7edsasfeukmkgao/bc-one-cypher"},
            {"id":"rrn:content:event-profiles:93bfc341-0db5-42eb-857e-0b","eventTitle":"Red Bull BC One Cypher Gdańsk","eventTag":"Dance","startDate":"2021-05-08T16:00:00Z","endDate":"2021-05-08T23:59:59Z","location":{"place":"Gdansk","countryCode":"PL","countryName":null,"precision":"address"},"img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/2/24/bhttnkttuh0zih41qfyp/red-bull-bc-one-cypher-poland","logoTitle":"Red Bull BC One Cypher Gdańsk 2021 - logo","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/2/24/ste3u7edsasfeukmkgao/bc-one-cypher"},
            {"id":"rrn:content:event-profiles:93bfc341-0db5-42eb-857e-0b5c722b3a","eventTitle":"Red Bull BC One Cypher Gdańsk","eventTag":"Dance","startDate":"2021-05-08T16:00:00Z","endDate":"2021-05-08T23:59:59Z","location":{"place":"Gdansk","countryCode":"PL","countryName":null,"precision":"address"},"img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/2/24/bhttnkttuh0zih41qfyp/red-bull-bc-one-cypher-poland","logoTitle":"Red Bull BC One Cypher Gdańsk 2021 - logo","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/2/24/ste3u7edsasfeukmkgao/bc-one-cypher"},
            {"id":"rrn:content:event-profiles:93bfc341-0db5-42eb-857e-0b5c","eventTitle":"Red Bull BC One Cypher Gdańsk","eventTag":"Dance","startDate":"2021-05-08T16:00:00Z","endDate":"2021-05-08T23:59:59Z","location":{"place":"Gdansk","countryCode":"PL","countryName":null,"precision":"address"},"img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/2/24/bhttnkttuh0zih41qfyp/red-bull-bc-one-cypher-poland","logoTitle":"Red Bull BC One Cypher Gdańsk 2021 - logo","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/2/24/ste3u7edsasfeukmkgao/bc-one-cypher"},
            {"id":"rrn:content:event-profiles:93bfc341-0db5-42e","eventTitle":"Red Bull BC One Cypher Gdańsk","eventTag":"Dance","startDate":"2021-05-08T16:00:00Z","endDate":"2021-05-08T23:59:59Z","location":{"place":"Gdansk","countryCode":"PL","countryName":null,"precision":"address"},"img":"https://img.redbull.com/images/c_fill,g_auto,w_380,h_292/q_auto,f_auto/redbullcom/2021/2/24/bhttnkttuh0zih41qfyp/red-bull-bc-one-cypher-poland","logoTitle":"Red Bull BC One Cypher Gdańsk 2021 - logo","logoImg":"https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/2/24/ste3u7edsasfeukmkgao/bc-one-cypher"},
        ],
        activeTab : "Upcoming",
        imgOP : "c_fill,g_auto,w_380,h_292/q_auto,f_auto",
        logoOP : "e_trim:10:transparent/c_limit,w_309/q_auto,f_png",
    }

    // toggle active tab
    handleTab = (target) => {
        [...this.tabs.children].map( element => {
            // simply set className
            if (element === target){
                element.className = "active-tab"
                this.setState({activeTab: element.innerHTML})
            } else{
                element.className = "tab";
            } 

            // add className
            // const classNameSet = new Set(element.className.split(" "));
            // element === target ? classNameSet.add("active-tab") : classNameSet.delete("active-tab")
            // element.className = [...classNameSet].join(" ");
        })
    }

    parseAjaxResult = (tag, url, params) => {
        axios.get(url, {params}).then(res => {
            res.data["data"].map(event => {
                const {upcomingEvents, pastEvents, imgOP, logoOP} = this.state
                const {id,location,uriSlug} = event
                const eventBadge = event.badge && event.badge.type;  // "replayAvailable", "postpone"
                const eventTitle = event.content.title;
                const eventTag = event.content.tag.text;
                const {startDate, endDate} = event.event;  // "2021-04-29T00:00:00+02:00" "2021-06-26T23:55:00+02:00"
                const img = event.media.mainImage.imageEssence.imageURL.replace("{op}", imgOP)
                const logoTitle = event.logo.title
                const logoImg = event.logo.imageEssence.imageURL.replace("{op}", logoOP)
                const newEvent = {id,eventBadge,eventTitle,eventTag,startDate,endDate,location,img,logoTitle,logoImg,uriSlug}

                tag === "upcoming" ? this.setState({upcomingEvents: [...upcomingEvents,newEvent]}) : this.setState({pastEvents: [...pastEvents,newEvent]})
            })
        })
    }

    componentDidMount(){
        // // ajax - upcoming
        // const urlUpcoming = "http://localhost:5000/v3/api/graphql/v1/v3/query/en-INT%3Ear-MEA%3Eaz-AZ%3Ebg-BG%3Ebs-BA%3Ecs-CZ%3Eda-DK%3Ede-AT%3Ede-CH%3Ede-DE%3Ede-INT%3Ear-EG%3Eel-GR%3Een-AU%3Een-CA%3Een-CAR%3Een-GB%3Een-IE%3Een-IN%3Een-MEA%3Een-MK%3Een-MY%3Een-PH%3Een-NZ%3Een-SE%3Een-SG%3Een-US%3Een-ZA%3Ees-AR%3Ees-CAR%3Ees-CL%3Ees-CO%3Ees-ES%3Ees-INT%3Ees-MX%3Ees-PE%3Eet-EE%3Efi-FI%3Efr-BE%3Efr-CA%3Efr-CH%3Efr-DZ%3Efr-FR%3Efr-INT%3Ehr-HR%3Ehu-HU%3Eid-ID%3Eit-IT%3Eja-JP%3Een-KE%3Eko-KR%3Elt-LT%3Elv-LV%3Enl-BE%3Enl-NL%3Eno-NO%3Epl-PL%3Ept-BR%3Ept-PT%3Ero-RO%3Eru-RU%3Esk-SK%3Esl-SI%3Eth-TH%3Etr-TR%3Euk-UA%3Ezh-CN%3Ezh-HK%3Ezh-TW%3Ekk-KZ%3Esq-AL%3Esr-RS%3Een-PK%3Een-NG%3Ees-LAT%3Emk-MK";
        // const paramsUpcoming = {
        //     "filter[type]" : "event-profiles",
        //     "filter[relationships.series]" : "rrn:slug:event-series:*:bc-one",
        //     "filter[endDate][gte]" : "0d",
        //     "sort" : "startDate",
        //     "rb3Schema" : "v1:cardList",
        //     "rb3UseEditorialTitle" : true,
        // }
        // this.parseAjaxResult("upcoming", urlUpcoming, paramsUpcoming);
        
        // // ajax - past
        // const urlPast = "http://localhost:5000/v3/api/graphql/v1/v3/feed/en-INT%3Ear-MEA%3Eaz-AZ%3Ebg-BG%3Ebs-BA%3Ecs-CZ%3Eda-DK%3Ede-AT%3Ede-CH%3Ede-DE%3Ede-INT%3Ear-EG%3Eel-GR%3Een-AU%3Een-CA%3Een-CAR%3Een-GB%3Een-IE%3Een-IN%3Een-MEA%3Een-MK%3Een-MY%3Een-PH%3Een-NZ%3Een-SE%3Een-SG%3Een-US%3Een-ZA%3Ees-AR%3Ees-CAR%3Ees-CL%3Ees-CO%3Ees-ES%3Ees-INT%3Ees-MX%3Ees-PE%3Eet-EE%3Efi-FI%3Efr-BE%3Efr-CA%3Efr-CH%3Efr-DZ%3Efr-FR%3Efr-INT%3Ehr-HR%3Ehu-HU%3Eid-ID%3Eit-IT%3Eja-JP%3Een-KE%3Eko-KR%3Elt-LT%3Elv-LV%3Enl-BE%3Enl-NL%3Eno-NO%3Epl-PL%3Ept-BR%3Ept-PT%3Ero-RO%3Eru-RU%3Esk-SK%3Esl-SI%3Eth-TH%3Etr-TR%3Euk-UA%3Ezh-CN%3Ezh-HK%3Ezh-TW%3Ekk-KZ%3Esq-AL%3Esr-RS%3Een-PK%3Een-NG%3Ees-LAT%3Emk-MK";
        // const paramsPast = {
        //     "filter[relationships.series]" : "rrn:slug:event-series:*:bc-one",
        //     "filter[endDate][lt]" : "0d",
        //     "filter[startDate][gte]" : "-365d",
        //     "filter[type]" : "event-profiles",
        //     "sort" : "-endDate",
        //     "rb3Schema" : "v1:cardList",
        //     "rb3UseEditorialTitle" : true,
        // }
        // this.parseAjaxResult("past", urlPast, paramsPast);

    }

    render() {
        return (
            <div className="event-wrapper">
                <header className="event-header">
                    <h2>Events</h2>
                    <div className="event-tabs" ref={c => this.tabs = c}>
                        <button className="active-tab" onClick={e => this.handleTab(e.target)}>Upcoming</button>
                        <button className="tab" onClick={e => this.handleTab(e.target)}>Past</button>
                    </div>
                </header>
                <div className="event-slider">
                    <ImageSlider>
                        {(
                            this.state.activeTab === "Upcoming" ? 
                            this.state.upcomingEvents.map(event => <EventCard key={event.id} {...event} />) : 
                            this.state.pastEvents.map(event => <EventCard key={event.id} {...event} />)
                        )}
                    </ImageSlider>
                </div>
                
            </div>
        )
    }
}


export default connect(
    state => ({})
    ,{}
)(Event)