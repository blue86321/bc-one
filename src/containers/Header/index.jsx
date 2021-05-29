import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

import menu from '../../common/images/menu.svg'
import logo from '../../common/images/redbullcom-logo.svg'
import userLoginIcon from '../../common/images/user-login.svg'
import searchIcon from '../../common/images/search.svg'

class Header extends Component {
    render() {
        return (
            <header className="top-header dark-theme">
                <div className="header-wrapper">
                    {/* side bar (left and right) */}
                    <div className="side">
                        {/* left header */}
                        <div className="left">
                            <button className="menu">
                                <img className="menu-icon" src={menu} alt="menu-icon" />
                                <div className="hover-bg"></div>
                            </button>
                            <a href="#">
                                <img className="homepage-logo" src={logo} alt="homepage-logo" />
                            </a>
                        </div>
                        {/* right header */}
                        <div className="right">
                            <div className="icon-wrapper">
                                <img className="user-login-icon" src={userLoginIcon} alt="user-login-icon" />
                                <div className="hover-bg"></div>
                            </div>
                            <div className="icon-wrapper">
                                <img className="search-icon" src={searchIcon} alt="search-icon" />
                                <div className="hover-bg"></div>
                            </div>

                        </div>
                    </div>

                    {/* mid header */}
                    <div className="mid">
                        {/* a tag will expand tag-wrapper, which is the hover-bg width */}
                        {/* because of tag-wrapper, a tag with padding will make hover-bg in the same position */}
                        <div className="tag-wrapper"><a href="#"><div className="hover-bg"></div>TV</a></div>
                        <div className="tag-wrapper"><a href="#"><div className="hover-bg"></div>Events</a></div>
                        <div className="tag-wrapper"><a href="#"><div className="hover-bg"></div>Athletes</a></div>
                        <div className="tag-wrapper"><a href="#"><div className="hover-bg"></div>Products</a></div>
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