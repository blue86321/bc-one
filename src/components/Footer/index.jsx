import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="global-footer-wrapper">
                <footer className="global-footer">
                    <div className="footer-copyright">&copy; 2021 Red Bull</div>
                    <div className="footer-nav">
                        <a href="https://www.redbull.com/pp/en_INT" target="_blank" rel="noreferrer">Privacy Policy</a>
                        <a href="https://www.redbull.com/tou/en_INT" target="_blank" rel="noreferrer">Terms of Use</a>
                        <a href="https://www.redbull.com/us-en/energydrink/contact-privacy" target="_blank" rel="noreferrer">Do not sell my personal information</a>
                        <a href="https://energydrink.redbull.com" target="_blank" rel="noreferrer">Products & Company</a>
                        <a href="https://www.redbull.com/im/en_INT" target="_blank" rel="noreferrer">Imprint</a>
                        <a href="https://www.redbull.com/bp/en_INT" target="_blank" rel="noreferrer">Brand Protection</a>
                        <a href="http://www.redbull.com/fw/en_INT" target="_blank" rel="noreferrer">Fraud Warning</a>
                        <a href="https://www.redbullcontentpool.com" target="_blank" rel="noreferrer">Media</a>
                        <a href="http://energydrink.redbull.com/contact-landing" target="_blank" rel="noreferrer">Contact us</a>
                        <a href="https://www.redbullshop.com/en/?utm_campaign=navi&utm_source=redbull.com&utm_medium=projects&utm_content=en&wt_mc=projects.redbull_com.navi" target="_blank" rel="noreferrer">Shop</a>
                        <a href="https://jobs.redbull.com" target="_blank" rel="noreferrer">Jobs</a>
                        <button>Cookie settings</button>
                    </div>
                </footer>
            </div>
        )
    }
}
