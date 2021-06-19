import React, { Component } from 'react'
import FeedCard from './FeedCard'
import './index.css'

export default class CardFeed extends Component {
    render() {
        return (
            <div className="card-feed-wrapper">
                <div className="card-grid">
                    {
                        this.props.children.map(card => <FeedCard key={card.props.id} {...card.props} />)
                    }
                </div>
            </div>
        )
    }
}
