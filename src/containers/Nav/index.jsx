import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.css'
import Info from '../../pages/Info'

class Nav extends Component {

    // TODO: nav-sticky 等待 JS 实现
    
    render() {
        return (
            <div>
                <div className="nav-wrapper dark-theme">
                    <nav>
                        <NavLink className="nav-tab" to="/">Info</NavLink>
                        <NavLink className="nav-tab" to="/bc-one-all-star">Breakers</NavLink>
                        <NavLink className="nav-tab" to="/bc-one-videos">Videos</NavLink>
                        <NavLink className="nav-tab" to="/bc-one-gallery">Gallery</NavLink>
                        <NavLink className="nav-tab" to="/bc-one-champion">Winners</NavLink>
                        <NavLink className="nav-tab" to="/battle-x">Battle-X</NavLink>
                    </nav>
                </div>

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