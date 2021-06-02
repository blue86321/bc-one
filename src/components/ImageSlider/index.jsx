import React, { Component } from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './index.css'

export default class ImageSlider extends Component {

    // TODO: 1.end detector, don't slide too much; 2. hover showing (e.g. don't show Prev at zero)
    // TODO: ajax
    navPrev = () => {
        const eachOffsetPct = 1350;
        const currentOffset = parseInt(this.slider.style.transform.replace("translateX(", ""));
        const newOffset = currentOffset + eachOffsetPct;
        if (currentOffset < 0){
            this.slider.style.transform = `translateX(${newOffset}px)`
        }
    }

    navNext = () => {
        const eachOffsetPct = 1350;
        const currentOffset = parseInt(this.slider.style.transform.replace("translateX(", ""));
        const newOffset = currentOffset - eachOffsetPct;
        this.slider.style.transform = `translateX(${newOffset}px)`
        
        // can also use getComputedStyle to get the matrix, translateX: matrix[4], translateY: matrix[5]
        // matrix[0:3] : 2D rotation/scale of the element
        // Note: can only apply to simple translate, when combining with rotate, translate should go first
        // console.log(window.getComputedStyle(this.slider)["transform"]);
    }


    render() {
        return (
            <div className="slider-viewport hover-show-slider-nav">
                <div className="slider-container" ref={c => this.slider = c} style={{transform:"translateX(0px)"}}>
                    {this.props.children.map(item => item)}
                </div>
                <button className="nav-btn previous" onClick={this.navPrev}><NavigateNextIcon style={{transform:"rotate(180deg)"}}/></button>
                <button className="nav-btn next" onClick={this.navNext}><NavigateNextIcon/></button>
            </div>
        )
    }
}
