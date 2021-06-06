import React, { Component } from 'react'
import './index.css'

export default class StoryCard extends Component {
    render() {
        const {title,desc,tagText,imageURL,imgTitle,uriSlug} = this.props
        const link = uriSlug && "https://www.redbull.com/int-en/" + uriSlug
        const trimDesc = desc && desc.slice(0,100) + "…"
        return (
            <a href={link} className={link ? "slider-item" : "slider-item empty"}>
                <div className="media-preview">
                    {imageURL ? <img src={imageURL} alt title={imgTitle} /> : ""}
                </div>
                <div className="story-info">
                    <div className="title">{title}</div>
                    <p className="desc">{trimDesc}</p>
                    <footer className="tag">{tagText}</footer>
                </div>
            </a>
        )
    }
}
