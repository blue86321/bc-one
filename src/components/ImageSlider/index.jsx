import React, { Component } from 'react'
// import { cloneElement, isValidElement } from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './index.css'

export default class ImageSlider extends Component {

    state = {
        sliderEachOffset : 0,
        cardWidth : [],
        sliderTotalWidth: 0,
        sliderRightEnd: 0,
        showNavPrev: false,
        showNavNext: true,
    }

    navPrev = () => {
        const currentOffset = parseInt(this.slider.style.transform.replace("translateX(", ""));
        const tempNewOffset = currentOffset + this.state.sliderEachOffset;
        const newOffset = Math.min(tempNewOffset,0);
        if (currentOffset < 0){
            this.slider.style.transform = `translateX(${newOffset}px)`
            this.setState({showNavNext:true})
        }

        if (newOffset === 0) this.setState({showNavPrev:false,showNavNext:true})
    }

    navNext = () => {
        const {sliderTotalWidth, sliderRightEnd} = this.state
        if (sliderTotalWidth <= this.viewport.clientWidth) return  // not enough content to scroll right
        const currentOffset = parseInt(this.slider.style.transform.replace("translateX(", ""));
        const tempNewOffset = currentOffset - this.state.sliderEachOffset
        const newOffset = Math.max(tempNewOffset, sliderRightEnd)
        this.slider.style.transform = `translateX(${newOffset}px)`
        
        // right end, hide navNext button
        newOffset === sliderRightEnd ? this.setState({showNavPrev:true,showNavNext:false}) : this.setState({showNavPrev:true,showNavNext:true})
        
        // can also use getComputedStyle to get the matrix, translateX: matrix[4], translateY: matrix[5]
        // matrix[0:3] : 2D rotation/scale of the element
        // Note: can only apply to simple translate, when combining with rotate, translate should go first
        // console.log(window.getComputedStyle(this.slider)["transform"]);
    }

    componentDidMount(){
        // slider offset each time clicking nav-btn
        this.setState({sliderEachOffset: this.viewport.clientWidth * .8});  // unit: px
    }

    componentDidUpdate(prevProps,prevState){
        // calculate each card width (for end detection)
        const cardWidth = [...this.slider.children].map( card => {
            const margin = parseInt(getComputedStyle(card)["margin-left"]) + parseInt(getComputedStyle(card)["margin-right"])
            const cardTotalWidth = parseInt(card.clientWidth) + margin
            return cardTotalWidth
        })

        const sliderTotalWidth = cardWidth.reduce((pre,cur)=> pre+cur, 0)
        const sliderOffsetLeft = this.slider.offsetLeft
        const sliderRightEnd = ((sliderTotalWidth+sliderOffsetLeft) - this.viewport.clientWidth) * (-1)

        // sliderWith <= viewportWIdth (not enough content to scroll right)
        const showNavNext = sliderTotalWidth <= this.viewport.clientWidth ? false : true
        if (sliderTotalWidth !== prevState.sliderTotalWidth){
            this.setState({
                cardWidth,
                sliderTotalWidth,
                sliderRightEnd,
                showNavNext,
            })
        }
    }


    render() {
        const {children,viewportStyle,containerStyle,navbtnStyle,sliderClassName} = this.props
        const {showNavPrev, showNavNext} = this.state
        
        return (
            <div
                className={sliderClassName ? "slider-viewport " + sliderClassName : "slider-viewport"}
                style={{...viewportStyle}}
                ref={c=>this.viewport=c}
            >
                <div className="slider-container" ref={c => this.slider = c} style={{transform:"translateX(0px)",...containerStyle}}>
                    {
                        children.map(item => item)
                    }
                    {/* {children.map(
                        (item,index) => isValidElement(item) ? cloneElement(item, {getCard:this.getCard, index}) : item
                    )} */}
                </div>
                <button className="nav-btn previous" onClick={this.navPrev} style={showNavPrev ? {...navbtnStyle} : {...navbtnStyle,opacity:0,pointerEvents:"none"}}><NavigateNextIcon style={{transform:"rotate(180deg)"}}/></button>
                <button className="nav-btn next" onClick={this.navNext} style={showNavNext ? {...navbtnStyle} : {...navbtnStyle,opacity:0,pointerEvents:"none"}}><NavigateNextIcon/></button>
            </div>
        )
    }
}
