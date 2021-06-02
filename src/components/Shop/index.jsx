import React, { Component } from 'react'
import axios from 'axios'

export default class Shop extends Component {

    state = {

    }

    componentDidMount(){
        // // ajax
        // const url = "http://localhost:5000/php/rb-alpha-shop-feed.php"
        // const params = {
        //     "shopUrl" : "https://transport.productsup.io/e929737329b237842c87/channel/139145/BCOne.xml"
        // }
        // axios.get(url, {params}).then(data => {
        //     console.log("shop ok");

        //     // xml data
        // })

        this.setState({})
    }

    render() {
        return (
            <div className="shop-wrapper">
                <h2>Red Bull BC One Shop</h2>
                <div className="merchandise-rail"></div>
                <button className="more"><a href="#">Show entire collection</a></button>
            </div>
        )
    }
}
