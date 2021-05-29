import React, { Component } from 'react'

export default class Shop extends Component {
    render() {
        return (
            <div calssName="shop-wrapper">
                <h2>Red Bull BC One Shop</h2>
                <div className="merchandise-rail"></div>
                <button className="more"><a href="#">Show entire collection</a></button>
            </div>
        )
    }
}
