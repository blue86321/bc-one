import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.css'
import Info from '../../pages/Info'
import Breaker from '../../pages/Breaker'
import Video from '../../pages/Video'
import Gallery from '../../pages/Gallery'
import Winner from '../../pages/Winner'

class Nav extends Component {

    state = {
        stickyNav : false
    }

    componentDidMount(){
        // sticky-nav
        const stikyNavTopMargin = 12;
        const stickyTriggerLimit = this.nav.offsetTop - stikyNavTopMargin
        window.addEventListener("scroll", () => {
            if(window.pageYOffset > stickyTriggerLimit && this.state.stickyNav === false){
                this.setState({stickyNav : true})
            }
            if(window.pageYOffset <= stickyTriggerLimit && this.state.stickyNav){
                this.setState({stickyNav : false})
            }
        })
    }

    backToNavTop = (e) => {
        const isScrollOver = window.pageYOffset > this.navWrapper.offsetTop;
        const notActive = e.target.className.indexOf('active') === -1;
        (isScrollOver && notActive) && window.scrollTo(0,this.navWrapper.offsetTop)
    }
    
    render() {
        return (
            <div>
                {/* nav */}
                <div className="nav-wrapper" ref={c => this.navWrapper = c}>
                    <nav className={this.state.stickyNav ? "sticky-nav" : ""} ref={ c => this.nav = c} >
                        <NavLink className="nav-tab" to="/bc-one" onClick={this.backToNavTop}>Info</NavLink>
                        <NavLink className="nav-tab" to="/bc-one-all-star" onClick={this.backToNavTop}>Breakers</NavLink>
                        <NavLink className="nav-tab" to="/bc-one-videos" onClick={this.backToNavTop}>Videos</NavLink>
                        <NavLink className="nav-tab" to="/bc-one-gallery" onClick={this.backToNavTop}>Gallery</NavLink>
                        <NavLink className="nav-tab" to="/bc-one-champion" onClick={this.backToNavTop}>Winners</NavLink>
                        <a className="nav-tab" href="https://www.redbull.com/int-en/event-series/bc-one/battle-x">Battle-X</a>
                    </nav>
                </div>

                {/* Content pages */}
                <Switch>
                    <Route path="/bc-one" component={Info}/>
                    {/* component={...} */}
                    <Route path="/bc-one-all-star" component={Breaker}/>
                    <Route path="/bc-one-videos" component={Video}/>
                    <Route path="/bc-one-gallery" component={Gallery}/>
                    <Route path="/bc-one-champion" component={Winner}/>
                    <Redirect to="/bc-one"/>
                </Switch>
                
            </div>
        )
    }
}


export default connect(
    state => ({}),
    {}
)(Nav)