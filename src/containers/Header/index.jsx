import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

import menu from '../../assets/images/menu.svg'
import logo from '../../assets/images/redbullcom-logo.svg'
import userLoginIcon from '../../assets/images/user-login.svg'
import searchIcon from '../../assets/images/search.svg'

class Header extends Component {
    render() {
        return (
            <header className="top-header">
                <div className="header-wrapper">
                    {/* side bar (left and right) */}
                    <div className="side">
                        {/* left header */}
                        <div className="left">
                            <button className="menu">
                                <img className="menu-icon" src={menu} alt="menu-icon" />
                            </button>
                            <a href="https://www.redbull.com/">
                                <img className="homepage-logo" src={logo} alt="homepage-logo" />
                            </a>
                        </div>
                        {/* right header */}
                        <div className="right">
                            <div className="icon-wrapper">
                                <img className="user-login-icon" src={userLoginIcon} alt="user-login-icon" />
                            </div>
                            <div className="icon-wrapper">
                                <img className="search-icon" src={searchIcon} alt="search-icon" />
                            </div>

                        </div>
                    </div>

                    {/* mid header */}
                    <div className="mid">
                        <a href="https://www.redbull.com/discover" rel="noreferrer">TV</a>
                        <a href="https://www.redbull.com/events" rel="noreferrer">Events</a>
                        <a href="https://www.redbull.com/athletes" rel="noreferrer">Athletes</a>
                        <a href="https://www.redbull.com/energydrink" rel="noreferrer">Products</a>
                    </div>
                </div>
            </header>
        )
    }
}


export default connect(
    state => ({}),
    {}
)(Header)