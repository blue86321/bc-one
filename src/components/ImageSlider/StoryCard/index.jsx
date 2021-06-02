import React, { Component } from 'react'
import './index.css'

export default class StoryCard extends Component {
    render() {
        const {id, img, title, desc, tag} = this.props
        return (
            <div key={id} className="slider-item">
                <img src={img} alt="story-item" />
                <div className="story-info">
                    <div className="title"><h3>{title}</h3></div>
                    <p className="desc">{desc}</p>
                    <footer className="tag">{tag}</footer>
                </div>
            </div>
        )
    }
}
