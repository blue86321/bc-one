import React, { Component } from 'react'
import calendarIcon from '../../../common/images/calendar.svg'
import eventBadgeIndicator from '../../../common/images/event-badge-indicator.svg'
import './index.css'

export default class EventCard extends Component {
    render() {
        const {eventBadge,eventTitle,eventTag,startDate,endDate,location,img,logoTitle,logoImg,uriSlug} = this.props
        const {countryCode, place, countryName} = location || {undefined,undefined,undefined}
        const locationFormat = place + ", " + countryName
        const countryIcon = countryCode && `https://resources.redbull.com/icons/flags/v2/${countryCode}@2x.png`
        return (
            <a className="event-card" href={"https://www.redbull.com/int-en/events/"+uriSlug}>
                
                {/* preview img/video */}
                <div className="event-preview">
                    <div className="media">
                        <img src={img} alt={eventTitle} />
                    </div>
                    <div className="logo">
                        <img src={logoImg} alt={"LOGO - "+eventTitle} />
                    </div>
                </div>

                {/* info */}
                <div className="event-info">
                    <div className="event-title">{eventTitle}</div>
                    <div className="date">
                        <img src={calendarIcon} alt="calendar-icon" className="calendar-icon"/>
                        <time datetime={startDate}>startDate</time>
                    </div>
                {(location ? 
                    <div className="event-location">
                        <img className="country-icon" src={countryIcon} alt={countryName} />
                        <span className="location-text">{locationFormat}</span>
                    </div>
                : "")}
                    <div className="event-tag">{eventTag}</div>
                </div>
                {eventBadge ? 
                    <div className="event-badge">
                        <img src={eventBadgeIndicator} alt="event-badge-indicator" className="event-badge-indicator" />
                        <span className="event-badge-text">{eventBadge}</span>
                    </div>
                : ""}
            </a>
        )
    }
}
