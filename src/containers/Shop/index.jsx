import React, { Component } from 'react'
import axios from 'axios'
import ImageSlider from '../../components/ImageSlider'
import {ShopCard} from '../../components/Card'
import './index.css'


export default class Shop extends Component {

    state = {
        products : [],
        navbtnStyle : {
            width:"40px",
            height:"40px",
        },
    }

    getShopData = async () => {
        try {
            const url = "http://localhost:5000/php/rb-alpha-shop-feed.php"
            const params = {
                "shopUrl" : "https://transport.productsup.io/e929737329b237842c87/channel/139145/BCOne.xml"
            }
            const res = await axios.get(url, {params})
            const parser = new DOMParser();
            const xmlStr = res.data;  // xml data
            const xml = parser.parseFromString(xmlStr, 'text/xml');
            const productsTree = xml.querySelectorAll("products product");
            const products = [...productsTree].map(product => {
                const id = product.querySelector("id").innerHTML.replace(new RegExp("<!\\[CDATA\\[","g"), "").replace(new RegExp("\\]\\]>","g"), "");
                const link = product.querySelector("product_url").innerHTML.replace(new RegExp("<!\\[CDATA\\[","g"), "").replace(new RegExp("\\]\\]>","g"), "");
                const name = product.querySelector("product_name").innerHTML.replace(new RegExp("<!\\[CDATA\\[","g"), "").replace(new RegExp("\\]\\]>","g"), "");
                const gender = product.querySelector("gender").innerHTML.replace(new RegExp("<!\\[CDATA\\[","g"), "").replace(new RegExp("\\]\\]>","g"), "");
                const imageURL = product.querySelector("image_url").innerHTML.replace(new RegExp("<!\\[CDATA\\[","g"), "").replace(new RegExp("\\]\\]>","g"), "");
                const newProduct = {id,link,name,gender,imageURL}
                return newProduct
            })
            this.setState({products})
        } catch {
            console.log("showing test data because not opening the proxy server.")
            this.setState({
                products : [
                    {id:"111",link:"https://www.redbullshop.com/p/Freeze-Longsleeve-T-Shirt/BCO20030/?utm_campaign=bcoproductfeed&utm_source=redbull.com%2Fint-en%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=&wt_mc=projects.redbull_com%2Fint-en%2Fprojects%2Fbc-one.bcoproductfeed",name:"Freeze Longsleeve T-Shirt", gender:"Men",imageURL:"https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/BCO20030_5_1/Freeze-Longsleeve-T-Shirt.jpg?c"},
                    {id:"112",link:"https://www.redbullshop.com/p/Freeze-Longsleeve-T-Shirt/BCO20030/?utm_campaign=bcoproductfeed&utm_source=redbull.com%2Fint-en%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=&wt_mc=projects.redbull_com%2Fint-en%2Fprojects%2Fbc-one.bcoproductfeed",name:"Freeze Longsleeve T-Shirt", gender:"Men",imageURL:"https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/BCO20030_5_1/Freeze-Longsleeve-T-Shirt.jpg?c"},
                    {id:"113",link:"https://www.redbullshop.com/p/Freeze-Longsleeve-T-Shirt/BCO20030/?utm_campaign=bcoproductfeed&utm_source=redbull.com%2Fint-en%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=&wt_mc=projects.redbull_com%2Fint-en%2Fprojects%2Fbc-one.bcoproductfeed",name:"Freeze Longsleeve T-Shirt", gender:"Men",imageURL:"https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/BCO20030_5_1/Freeze-Longsleeve-T-Shirt.jpg?c"},
                    {id:"114",link:"https://www.redbullshop.com/p/Freeze-Longsleeve-T-Shirt/BCO20030/?utm_campaign=bcoproductfeed&utm_source=redbull.com%2Fint-en%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=&wt_mc=projects.redbull_com%2Fint-en%2Fprojects%2Fbc-one.bcoproductfeed",name:"Freeze Longsleeve T-Shirt", gender:"Men",imageURL:"https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/BCO20030_5_1/Freeze-Longsleeve-T-Shirt.jpg?c"},
                    {id:"115",link:"https://www.redbullshop.com/p/Freeze-Longsleeve-T-Shirt/BCO20030/?utm_campaign=bcoproductfeed&utm_source=redbull.com%2Fint-en%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=&wt_mc=projects.redbull_com%2Fint-en%2Fprojects%2Fbc-one.bcoproductfeed",name:"Freeze Longsleeve T-Shirt", gender:"Men",imageURL:"https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/BCO20030_5_1/Freeze-Longsleeve-T-Shirt.jpg?c"},
                    {id:"116",link:"https://www.redbullshop.com/p/Freeze-Longsleeve-T-Shirt/BCO20030/?utm_campaign=bcoproductfeed&utm_source=redbull.com%2Fint-en%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=&wt_mc=projects.redbull_com%2Fint-en%2Fprojects%2Fbc-one.bcoproductfeed",name:"Freeze Longsleeve T-Shirt", gender:"Men",imageURL:"https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/BCO20030_5_1/Freeze-Longsleeve-T-Shirt.jpg?c"},
                ],
            })
        }
    }

    componentDidMount(){
        this.getShopData()
    }

    render() {
        return (
            <div className="shop-wrapper">
                <div className="shop-container">
                    <h2>Red Bull BC One Shop</h2>
                    <div className="merchandise-slider">
                        <ImageSlider sliderClassName="one-third-slider" navbtnStyle={this.state.navbtnStyle}>
                            {
                                this.state.products.map( goods =>  <ShopCard key={goods.id} {...goods} /> )
                            }
                        </ImageSlider>
                    </div>
                    <a className="more-btn" target="_blank" rel="noreferrer" href="https://www.redbullshop.com/en-at/bc-one/?utm_campaign=navi&utm_source=redbull.com%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=en&wt_mc=projects.redbull_com%2Fprojects%2Fbc-one.navi">Show entire collection</a>
                </div>
            </div>
        )
    }
}
