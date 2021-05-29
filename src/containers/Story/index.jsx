import React, { Component } from 'react'
import { connect } from 'react-redux'

class Story extends Component {

    state = {
        // try to convert to Redux
        storys: [
            {
                img: "",
                title: "",
                desc: "",
                footer: ""
            }
        ]
    }

    render() {
        return (
            <div>
                {/* top-story */}
                <div className="top-story">
                    <img src="" alt="top-story-image" />
                    <div className="story-content">
                        <h4 className="title"></h4>
                        <p className="desc"></p>
                        <footer className="top-story-footer">
                            <div className="left"></div>
                            <button className="right"></button>
                        </footer>
                    </div>
                </div>

                {/* story rail */}
                <div className="story-rail">
                    <div className="section-info">
                        <div className="section-title">More stories like this</div>
                        <div className="section-desc">Enjoy a hand-picked selection of the best stories from the world of Red Bull BC One.</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(
    state => ({})
    ,{}
)(Story)