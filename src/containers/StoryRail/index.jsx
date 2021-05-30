import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

class StoryRail extends Component {

    state = {
        railItems : [
            {img:'',title:'Enter the Red Bull BC One E-Battle 2021 to secure a ticket to Gdansk',desc:'Red Bull BC One E-Battle is back. Find out everything you need to know and how to enter below.',tag:'Breaking'}
        ]
    }

    render() {
        return (
            <div className="story-rail-wrapper light-theme">
                <div className="story-rail">

                    {this.state.railItems.map(item => (
                        <div className="rail-item">
                            <img src="" alt="rail-item" />
                            <div className="rail-info">
                                <div className="title"><h3>{item.title}</h3></div>
                                <p className="desc">{item.desc}</p>
                                <footer className="tag">{item.tag}</footer>

                            </div>
                        </div>
                    ))}

                    <div className="section-info">
                        <div className="section-title"><h2>More stories like this</h2></div>
                        <div className="section-desc">Enjoy a hand-picked selection of the best stories from the world of Red Bull BC One.</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(StoryRail)