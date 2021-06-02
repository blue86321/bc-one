import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import './index.css'

class Event extends Component {

    state = {
        upcomingEvents : [],
        pastEvents : [],
    }

    // toggle active tab
    handleTab = (target) => {
        [...this.tabs.children].map( element => {
            // simply set className
            element === target ? element.className = "active-tab" : element.className = "tab";

            // add className
            // const classNameSet = new Set(element.className.split(" "));
            // element === target ? classNameSet.add("active-tab") : classNameSet.delete("active-tab")
            // element.className = [...classNameSet].join(" ");
        })
    }

    parseAjaxResult = (tag, url, params) => {
        axios.get(url, {params}).then(res => {
            res.data["data"].map(event => {
                const id = event.id;
                const eventBadge = event.badge && event.badge.type;  // "replayAvailable", "postpone"
                const eventTitle = event.content.title;
                const eventTag = event.content.tag.text;
                const {startDate, endDate} = event.event;  // "2021-04-29T00:00:00+02:00" "2021-06-26T23:55:00+02:00"
                const {location} = event
                const img = event.media.mainImage.imageEssence.imageURL
                const {title:logoTitle, imageEssence:{imageURL:logoImg}} = event.logo

                if (tag === "upcoming"){
                    this.state.upcomingEvents.push({id,eventBadge,eventTitle,eventTag,startDate,endDate,location,img,logoTitle,logoImg});
                } else if (tag === "past"){
                    this.state.pastEvents.push({id,eventBadge,eventTitle,eventTag,startDate,endDate,location,img,logoTitle,logoImg});
                }
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

        // console.log(this.state);
        this.setState({});
    }

    render() {
        return (
            <div className="event-wrapper light-theme">
                <header className="event-header">
                    <h2>Events</h2>
                    <div className="event-tabs" ref={c => this.tabs = c}>
                        <button className="active-tab" onClick={e => this.handleTab(e.target)}>Upcoming</button>
                        <button className="tab" onClick={e => this.handleTab(e.target)}>Past</button>
                    </div>

                    <div className="event-slider">

                    </div>
                </header>
                
            </div>
        )
    }
}


export default connect(
    state => ({})
    ,{}
)(Event)