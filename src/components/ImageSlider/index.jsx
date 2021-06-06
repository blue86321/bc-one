import React, { Component, cloneElement, isValidElement } from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './index.css'

export default class ImageSlider extends Component {

    state = {
        sliderEachOffset : "1350px",
        cardWidth : [],
    }

    // TODO: 1.end detector, don't slide too much; 2. hover showing (e.g. don't show Prev at zero)
    // TODO: ajax
    navPrev = () => {
        const currentOffset = parseInt(this.slider.style.transform.replace("translateX(", ""));
        const newOffset = currentOffset + parseInt(this.state.sliderEachOffset);
        if (currentOffset < 0){
            this.slider.style.transform = `translateX(${newOffset}px)`
        }
    }

    navNext = () => {
        const currentOffset = parseInt(this.slider.style.transform.replace("translateX(", ""));
        
        const newOffset = currentOffset - parseInt(this.state.sliderEachOffset);
        this.slider.style.transform = `translateX(${newOffset}px)`
        
        // can also use getComputedStyle to get the matrix, translateX: matrix[4], translateY: matrix[5]
        // matrix[0:3] : 2D rotation/scale of the element
        // Note: can only apply to simple translate, when combining with rotate, translate should go first
        // console.log(window.getComputedStyle(this.slider)["transform"]);
    }

    getCard = (card, index) => {
        const margin = parseInt(getComputedStyle(card)["margin-left"]) + parseInt(getComputedStyle(card)["margin-right"])
        const totalWidth = parseInt(card.clientWidth) + margin        
        this.state.cardWidth[index] = totalWidth;
    }

    componentDidMount(){
        const {sliderEachOffset} = this.props
        sliderEachOffset && this.setState({sliderEachOffset});  // slider offset each time clicking nav-btn
    }


    render() {
        const {children,viewportStyle,containerStyle,processBarStyle} = this.props
        
        return (
            <div className="slider-viewport" style={{...viewportStyle}}>
                <div className="slider-container" ref={c => this.slider = c} style={{transform:"translateX(0px)",...containerStyle}}>
                    {children.map(
                        (item,index) => isValidElement(item) ? cloneElement(item, {getCard:this.getCard, index}) : item
                    )}
                </div>
                <button className="nav-btn previous" onClick={this.navPrev}><NavigateNextIcon style={{transform:"rotate(180deg)"}}/></button>
                <button className="nav-btn next" onClick={this.navNext}><NavigateNextIcon/></button>
            </div>
        )
    }
}
