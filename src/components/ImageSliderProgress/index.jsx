import React, { Component, cloneElement, isValidElement } from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './index.css'

export default class ImageSliderProgress extends Component {

    state = {
        cardWidth : [],
        progressBarEaceOffset : 0,
        progressBarCurrentWidth : "0%",
        curImgIndex : 0,
        showNavPrev: false,
        showNavNext: true,
    }

    // TODO: 1. hover showing (e.g. don't show Prev at zero)
    navPrev = () => {
        const currentOffset = parseInt(this.slider.style.transform.replace("translateX(", ""));
        const {cardWidth, curImgIndex, progressBarCurrentWidth, progressBarEaceOffset} = this.state;
        if (currentOffset < 0){
            const newOffset = currentOffset + cardWidth[curImgIndex-1];
            this.slider.style.transform = `translateX(${newOffset}px)`
            this.setState({
                curImgIndex: curImgIndex-1,
                progressBarCurrentWidth: parseFloat(progressBarCurrentWidth)-progressBarEaceOffset+"%",
                showNavNext: true,
            })

            if (newOffset >= 0){
                this.setState({showNavPrev: false});
            }
        }
    }

    navNext = () => {
        const currentOffset = parseInt(this.slider.style.transform.replace("translateX(", ""));
        const {cardWidth, curImgIndex, progressBarCurrentWidth, progressBarEaceOffset} = this.state;
        if (parseFloat(this.state.progressBarCurrentWidth) < 99.99){
            const newOffset = currentOffset - cardWidth[curImgIndex];
            this.slider.style.transform = `translateX(${newOffset}px)`
            this.setState({
                curImgIndex: curImgIndex+1,
                progressBarCurrentWidth: parseFloat(progressBarCurrentWidth)+progressBarEaceOffset+"%",
                showNavPrev: true,
            })

            if (parseFloat(progressBarCurrentWidth)+progressBarEaceOffset >= 100){
                this.setState({showNavNext: false});
            }
        }
    }

    // get child element (card) to calculate its width (for progressBarCurrentWidth)
    getCard = (card, index) => {
        const margin = parseInt(getComputedStyle(card)["margin-left"]) + parseInt(getComputedStyle(card)["margin-right"])
        const totalWidth = parseInt(card.clientWidth) + margin        
        this.state.cardWidth[index] = totalWidth;
    }

    componentDidMount(){
        this.setState({
            progressBarEaceOffset: 100/this.props.children.length,
            progressBarCurrentWidth: 100/this.props.children.length + "%",
        });
    }


    render() {
        const {children,viewportStyle,containerStyle,progressBarStyle} = this.props;
        const {showNavPrev,showNavNext} = this.state;
        
        return (
            <div className="slider-progress-viewport" style={{...viewportStyle}}>
                <div className="slider-container" ref={c => this.slider = c} style={{transform:"translateX(0px)",...containerStyle}}>
                    {children.map(
                        (item,index) => isValidElement(item) ? cloneElement(item, {getCard:this.getCard, index}) : item
                    )}
                </div>
                <button className="nav-btn previous" onClick={this.navPrev} style={showNavPrev ? {} : {opacity:0,pointerEvents:"none"}}><NavigateNextIcon style={{transform:"rotate(180deg)",color:"#fff"}}/></button>
                <button className="nav-btn next" onClick={this.navNext} style={showNavNext ? {} : {opacity:0,pointerEvents:"none"}}><NavigateNextIcon style={{color:"#fff"}}/></button>
                <div className="progress-bar-container" style={{...progressBarStyle}}>
                    <div className="progress-bar" style={{width:this.state.progressBarCurrentWidth}}></div>
                    <div className="progress-bar-background"></div>
                </div>
            </div>
        )
    }
}
