import React, { Component } from 'react'
import './index.css'

export default class ShopCard extends Component {
    render() {
        const {link,img,name,gender} = this.props;
        return (
            <div className="shop-card">
                <a className="item-img-link" href={link}>
                    <img src={img} alt={name} />
                </a>
                <div className="item-desc">
                    <h3 className="item-name">{name}</h3>
                    <div className="item-gender">{gender}</div>
                    <div className="shop-btn-container">
                        <a className="shop-now-link-btn" href={link}>Shop Now</a>
                    </div>
                </div>
            </div>
                

        )
    }
}
