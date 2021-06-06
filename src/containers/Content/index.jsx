import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.css'
import Info from '../../pages/Info'

class Nav extends Component {

    state = {
        stickyNav : false
    }

    componentDidMount(){
        // sticky-nav
        const stikyNavTopMargin = 12;
        const stickyTriggerLimit = this.nav.offsetTop - stikyNavTopMargin
        window.addEventListener("scroll", () => {
            if(window.pageYOffset > stickyTriggerLimit){
                this.setState({stickyNav : true})
            } else {
                this.setState({stickyNav : false})
            }
        })
    }
    
    render() {
        return (
            <div>
                {/* nav */}
                <div className="nav-wrapper">
                    <nav className={this.state.stickyNav ? "sticky-nav" : ""} ref={ c => this.nav = c} >
                        <NavLink className="nav-tab" to="/">Info</NavLink>
                        <NavLink className="nav-tab" to="/bc-one-all-star">Breakers</NavLink>
                        <NavLink className="nav-tab" to="/bc-one-videos">Videos</NavLink>
                        <NavLink className="nav-tab" to="/bc-one-gallery">Gallery</NavLink>
                        <NavLink className="nav-tab" to="/bc-one-champion">Winners</NavLink>
                        <NavLink className="nav-tab" to="/battle-x">Battle-X</NavLink>
                    </nav>
                </div>

                {/* Content pages */}
                <Switch>
                    <Route path="/" component={Info}/>
                    {/* component={...} */}
                    <Route path="/bc-one-all-star"/>  
                    <Route path="/bc-one-videos"/>
                    <Route path="/bc-one-gallery"/>
                    <Route path="/bc-one-champion"/>
                    <Route path="/bc-one-battle-x"/>
                    <Redirect to="/"/>
                </Switch>

                
            </div>
        )
    }
}


export default connect(
    state => ({}),
    {}
)(Nav)