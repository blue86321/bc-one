import React, { Component } from 'react'
import './index.css'

export default class GalleryCard extends Component {

    componentDidMount(){
        const {getCard, index} = this.props;
        getCard(this.card, index);
    }

    render() {
        const {altText,copyright,title,imageURL} = this.props
        return (
            <div className="gallery-card" ref={ c => this.card=c }>
                <figure>
                    <div className="img-container">
                        <img src={imageURL} alt={altText} title={title} />
                    </div>
                    <figcaption>
                        <div className="img-title">{title}</div>
                        <div className="img-copyright">{copyright}</div>
                    </figcaption>
                </figure>

            </div>
        )
    }
}
