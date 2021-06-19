import React, { Component } from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import calendarIcon from '../../assets/images/calendar.svg'
import eventBadgeIndicator from '../../assets/images/event-badge-indicator.svg'
import './index.css'


class StoryCard extends Component {
    render() {
        const {title,desc,tagText,imageURL,imgTitle,uriSlug,className,cardStyle} = this.props
        const link = uriSlug && "https://www.redbull.com/int-en/" + uriSlug
        const trimDesc = desc && desc.slice(0,100) + "…"
        return (
            <div className="card-wrapper story-card-wrapper" style={cardStyle ? cardStyle : {}}>
                <div className="card-content story-card-content">
                    <a href={link} className={link ? "card story-card "+className : "card story-card empty "+className}>
                        <div className="media-preview">
                            <div className="media">
                                <img src={imageURL} alt={imgTitle} title={imgTitle}/>
                            </div>
                        </div>
                        <div className="card-info">
                            <div className="title">{title}</div>
                            <p className="desc">{trimDesc}</p>
                            <footer className="tag">{tagText}</footer>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

class EventCard extends Component {

    state = {
        dateStr : '',
    }

    componentDidMount(){
        // date parse
        const {startDate, endDate} = this.props.event
        const startDateObj = new Date(startDate.slice(0,19))  // e.g. 2021-04-29T00:00:00+02:00
        const endDateObj = new Date(endDate.slice(0,19))
        const isSameMon = startDateObj.getMonth() === endDateObj.getMonth()
        const isOneDayEvent = startDateObj.getFullYear() === endDateObj.getFullYear() && startDateObj.getMonth() === endDateObj.getMonth() && startDateObj.getDate() === endDateObj.getDate()
        
        // e.g. toLocaleString('default', {day:'numeric',month:'long',year:'numeric'}) --> April 29, 2021
        const [startMon,startDay,startYear] = startDateObj.toLocaleString('default', {day:'numeric',month:'long',year:'numeric'}).replace(',','').split(' ')
        const [endMon,endDay,endYear] = endDateObj.toLocaleString('default', {day:'numeric',month:'long',year:'numeric'}).replace(',','').split(' ')
        const dateStr = (
            isOneDayEvent ? 
                ([startDay,startMon,startYear].join(' ')) : 
                (isSameMon ? 
                    ([startDay,'-',endDay,endMon,endYear].join(' ')) : 
                    ([startDay,startMon,'-',endDay,endMon,endYear].join(' '))
                    )
            )
        this.setState({dateStr})
    }

    render() {
        const {eventBadge,title,tagText,location,imageURL,logoTitle,logoURL,uriSlug,className,cardStyle} = this.props
        const {startDate} = this.props.event
        const {dateStr} = this.state
        const {countryCode, place, countryName} = location || {undefined}
        const locationFormat = countryName ? place + ", " + countryName : place
        const countryIcon = countryCode && `https://resources.redbull.com/icons/flags/v2/${countryCode}@2x.png`
        
        return (
            <div className="card-wrapper event-card-wrapper" style={cardStyle ? cardStyle : {}}>
                <div className="card-content event-card-content">
                    <a className={"card event-card "+className} href={"https://www.redbull.com/int-en/events/"+uriSlug}>
                        
                        {/* preview img/video */}
                        <div className="media-preview">
                            <div className={logoTitle ? "media media-with-logo" : "media"}>
                                <img src={imageURL} alt={title} />
                            </div>
                            <div className="logo">
                                <img src={logoURL} alt={logoTitle} />
                            </div>
                        </div>

                        {/* info */}
                        <div className="card-info">
                            <div className="title">{title}</div>
                            <div className="date">
                                <img src={calendarIcon} alt="calendar-icon" className="calendar-icon"/>
                                <time dateTime={startDate}>{dateStr}</time>

                            </div>
                        {
                            location &&
                                <div className="location">
                                    {
                                        countryCode === "VR" ?
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.5 9a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5zM17 19a1 1 0 111-1 1 1 0 01-1 1zm2.5-3h-5v-5.5h5z"></path><path d="M10.5 14.5h-5v-8h14A.5.5 0 0020 6v-.5a.5.5 0 00-.5-.5h-15a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V15a.5.5 0 00-.5-.5z"></path><rect x="7" y="18.5" width="4" height="1.5" rx=".5" ry=".5"></rect></svg>
                                            : <img className="country-icon" src={countryIcon} alt={countryName} title={countryName} />
                                    }
                                    <span className="location-text">{locationFormat}</span>
                                </div>
                        }
                            <div className="tag">{tagText}</div>
                        </div>
                        {
                            eventBadge &&
                                <div className="badge">
                                    <img src={eventBadgeIndicator} alt="badge-indicator" className="badge-indicator" />
                                    <span className="badge-text">{eventBadge}</span>
                                </div>
                        }
                    </a>
                </div>
            </div>
        )
    }
}

class ShopCard extends Component {
    render() {
        const {link,imageURL,name,gender,cardStyle} = this.props;
        return (
            <div className="card-wrapper shop-card-wrapper" style={cardStyle ? cardStyle : {}}>
                <div className="card-content shop-card-content">
                    <a href={link} className="card shop-card">
                        <div className="media-preview">
                            <div className="media">
                                <img src={imageURL} alt={name} title={name}/>
                            </div>
                        </div>
                        <div className="card-info">
                            <h3 className="title">{name}</h3>
                            <div className="gender">{gender}</div>
                            <div className="shop-btn-container">
                                <a className="shop-now-link-btn" href={link}>Shop Now</a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

class EventSeriesCard extends Component {
    render() {
        const {altText,copyright,title,imageURL,cardStyle} = this.props
        return (
            <div className="event-series-card" style={cardStyle ? cardStyle : {}}>
                <figure>
                    <div className="media">
                        <img src={imageURL} alt={altText} title={title} />
                    </div>
                    <figcaption>
                        <div className="title">{title}</div>
                        <div className="copyright">{copyright}</div>
                    </figcaption>
                </figure>

            </div>
        )
    }
}

class FilmCard extends Component {
    render() {
        const {title,subHeading,tagText,imageURL,imgTitle,uriSlug,className,cardStyle} = this.props
        const link = uriSlug && "https://www.redbull.com/int-en/" + uriSlug
        return (
            <div className="card-wrapper film-card-wrapper" style={cardStyle ? cardStyle : {}}>
                <div className="card-content film-card-content">
                    <a href={link} className={"card film-card "+className}>
                        <div className="media-preview">
                            <div className="media">
                                {imageURL && <img src={imageURL} alt={imgTitle} title={imgTitle} />}
                            </div>
                        </div>
                        <div className="card-info">
                            <div className="title">{title}</div>
                            <p className="sub-title">{subHeading}</p>
                            <footer className="tag">{tagText}</footer>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

class VideoCard extends Component {
    
    playVideo = () => {
        const {videoURL} = this.props
        this.video.src = videoURL
    }

    render() {
        const {title,subHeading,tagText,imageURL,imgTitle,uriSlug,className,duration,cardStyle} = this.props
        const durationMin = duration && Math.round(duration/60)
        const link = uriSlug && "https://www.redbull.com/int-en/videos/" + uriSlug
        return (
            <div className="card-wrapper video-card-wrapper" style={cardStyle ? cardStyle : {}}>
                <div className="card-content video-card-content">
                    <a href={link} onMouseEnter={this.playVideo} className={"card video-card "+className}>
                        <div className="media-preview">
                            <div className="media">
                                {imageURL && <img src={imageURL} alt={imgTitle} title={imgTitle} />}
                                <video src="" autoPlay loop preload="auto" ref={c=>this.video=c}></video>
                            </div>
                        </div>
                        <button className="video-card-play"><PlayArrowIcon style={{color:"#fff"}} /></button>
                        <div className="card-info">
                            <div className="title">{title}</div>
                            <p className="sub-title">{subHeading}</p>
                            <footer className="vdo-footer">
                                <div className="tag">{tagText}</div>
                                {durationMin && <div className="duration">{durationMin+" min"}</div>}
                            </footer>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

class ArtistCard extends Component {

    render() {
        const {title,location,imageURL,quote,uriSlug,className,tagText,cardStyle} = this.props
        const {countryCode, countryName} = location
        const countryIcon = countryCode && `https://resources.redbull.com/icons/flags/v2/${countryCode}@2x.png`
        const link = uriSlug && "https://www.redbull.com/int-en/artist/" + uriSlug
        return (
            <div className="card-wrapper artist-card-wrapper" style={cardStyle ? cardStyle : {}}>
                <div className="card-content artist-card-content">
                    <a href={link} className={"card artist-card "+className}>
                        <div className="media-preview">
                            <div className="media">
                                <img src={imageURL} alt={title} title={title} />
                            </div>
                        </div>
                        <div className="card-info">
                            <div className="location">
                                <img className="country-icon" src={countryIcon} alt={countryName} title={countryName} />
                                <span className="location-text">{countryName}</span>
                            </div>
                            <div className="title">{title}</div>
                            {quote && <p className="quote">{`"${quote}"`}</p>}
                            {tagText && <div className="tag">{tagText}</div>}
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

class ImageGalleryCard extends Component {
    render() {
        const {title,imageURL,tagText,photoCount,uriSlug,className,cardStyle} = this.props
        const link = uriSlug && "https://www.redbull.com/int-en/galleries/" + uriSlug
        return (
            <div className="card-wrapper image-gallery-card-wrapper" style={cardStyle ? cardStyle : {}}>
                <div className="card-content image-gallery-card-content">
                    <a href={link} className={"card image-gallery-card "+className}>
                        <div className="media-preview">
                            <div className="media">
                                <img src={imageURL} alt={title} title={title} />
                            </div>
                        </div>
                        <div className="card-info">
                            <div className="title">{title}</div>
                            <div className="photo-count">
                                <div className="photo-count-icon"><PhotoCameraOutlinedIcon style={{color:"#fff",width:"100%"}}/></div>
                                <div className="photo-count-text">{photoCount+" Photos"}</div>
                            </div>
                            <div className="tag">{tagText}</div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

class DefaultCard extends Component {
    render() {
        const {title,tagText,imageURL,imgTitle,uriSlug,className,cardStyle} = this.props
        const link = uriSlug && "https://www.redbull.com/int-en/" + uriSlug
        return (
            <div className="card-wrapper default-card-wrapper" style={cardStyle ? cardStyle : {}}>
                <div className="card-content default-card-content">
                    <a href={link} className={"card default-card "+className}>
                        <div className="media-preview">
                            <div className="media">
                                {imageURL && <img src={imageURL} alt={imgTitle} title={imgTitle} />}
                            </div>
                        </div>
                        <div className="card-info">
                            <div className="tag">{tagText}</div>
                            <div className="title">{title}</div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}


export {
    StoryCard,
    EventCard,
    ShopCard,
    EventSeriesCard,
    FilmCard,
    VideoCard,
    ArtistCard,
    ImageGalleryCard,
    DefaultCard,
}