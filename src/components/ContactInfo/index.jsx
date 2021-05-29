import React, { Component } from 'react'

export default class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-wrapper">
                <h3>Want to see more Red Bull BC One?</h3>
                <div className="contact-info">
                    <button className="facebook">Follow</button>
                    <button className="instagram">Follow</button>
                    <button className="twitter">Follow</button>
                </div>
            </div>
        )
    }
}
