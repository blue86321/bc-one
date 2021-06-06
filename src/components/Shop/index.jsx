import React, { Component } from 'react'
import axios from 'axios'
import ImageSlider from '../ImageSlider'
import ShopCard from '../ImageSlider/ShopCard'
import './index.css'


export default class Shop extends Component {

    state = {
        products : [
            {id:"111",link:"https://www.redbullshop.com/p/Freeze-Longsleeve-T-Shirt/BCO20030/?utm_campaign=bcoproductfeed&utm_source=redbull.com%2Fint-en%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=&wt_mc=projects.redbull_com%2Fint-en%2Fprojects%2Fbc-one.bcoproductfeed",name:"Freeze Longsleeve T-Shirt", gender:"Men",img:"https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/BCO20030_5_1/Freeze-Longsleeve-T-Shirt.jpg?c"},
            {id:"112",link:"https://www.redbullshop.com/p/Freeze-Longsleeve-T-Shirt/BCO20030/?utm_campaign=bcoproductfeed&utm_source=redbull.com%2Fint-en%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=&wt_mc=projects.redbull_com%2Fint-en%2Fprojects%2Fbc-one.bcoproductfeed",name:"Freeze Longsleeve T-Shirt", gender:"Men",img:"https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/BCO20030_5_1/Freeze-Longsleeve-T-Shirt.jpg?c"},
            {id:"113",link:"https://www.redbullshop.com/p/Freeze-Longsleeve-T-Shirt/BCO20030/?utm_campaign=bcoproductfeed&utm_source=redbull.com%2Fint-en%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=&wt_mc=projects.redbull_com%2Fint-en%2Fprojects%2Fbc-one.bcoproductfeed",name:"Freeze Longsleeve T-Shirt", gender:"Men",img:"https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/BCO20030_5_1/Freeze-Longsleeve-T-Shirt.jpg?c"},
            {id:"114",link:"https://www.redbullshop.com/p/Freeze-Longsleeve-T-Shirt/BCO20030/?utm_campaign=bcoproductfeed&utm_source=redbull.com%2Fint-en%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=&wt_mc=projects.redbull_com%2Fint-en%2Fprojects%2Fbc-one.bcoproductfeed",name:"Freeze Longsleeve T-Shirt", gender:"Men",img:"https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/BCO20030_5_1/Freeze-Longsleeve-T-Shirt.jpg?c"},
            {id:"115",link:"https://www.redbullshop.com/p/Freeze-Longsleeve-T-Shirt/BCO20030/?utm_campaign=bcoproductfeed&utm_source=redbull.com%2Fint-en%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=&wt_mc=projects.redbull_com%2Fint-en%2Fprojects%2Fbc-one.bcoproductfeed",name:"Freeze Longsleeve T-Shirt", gender:"Men",img:"https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/BCO20030_5_1/Freeze-Longsleeve-T-Shirt.jpg?c"},
            {id:"116",link:"https://www.redbullshop.com/p/Freeze-Longsleeve-T-Shirt/BCO20030/?utm_campaign=bcoproductfeed&utm_source=redbull.com%2Fint-en%2Fprojects%2Fbc-one&utm_medium=projects&utm_content=&wt_mc=projects.redbull_com%2Fint-en%2Fprojects%2Fbc-one.bcoproductfeed",name:"Freeze Longsleeve T-Shirt", gender:"Men",img:"https://images.redbullshop.com/is/image/RedBullSalzburg/RB-product-detail/BCO20030_5_1/Freeze-Longsleeve-T-Shirt.jpg?c"},
        ],
    }

    componentDidMount(){
        // // ajax
        // const url = "http://localhost:5000/php/rb-alpha-shop-feed.php"
        // const params = {
        //     "shopUrl" : "https://transport.productsup.io/e929737329b237842c87/channel/139145/BCOne.xml"
        // }
        // axios.get(url, {params}).then(res => {
        //     const parser = new DOMParser();
        //     const xmlStr = res.data;  // xml data
        //     const xml = parser.parseFromString(xmlStr, 'text/xml');
        //     console.log(xml);
        //     const products = xml.querySelectorAll("products product");
        //     [...products].map(product => {
        //         const id = product.querySelector("id").innerHTML.replace(new RegExp("<!\\[CDATA\\[","g"), "").replace(new RegExp("\\]\\]>","g"), "");
        //         const link = product.querySelector("product_url").innerHTML.replace(new RegExp("<!\\[CDATA\\[","g"), "").replace(new RegExp("\\]\\]>","g"), "");
        //         const name = product.querySelector("product_name").innerHTML.replace(new RegExp("<!\\[CDATA\\[","g"), "").replace(new RegExp("\\]\\]>","g"), "");
        //         const gender = product.querySelector("gender").innerHTML.replace(new RegExp("<!\\[CDATA\\[","g"), "").replace(new RegExp("\\]\\]>","g"), "");
        //         const img = product.querySelector("image_url").innerHTML.replace(new RegExp("<!\\[CDATA\\[","g"), "").replace(new RegExp("\\]\\]>","g"), "");
        //         this.setState({products:[...this.state.products, {id,link,name,gender,img}]})
        //     })
        // })

        this.setState({})
    }

    render() {
        return (
            <div className="shop-wrapper">
                <div className="shop-container">
                    <h2>Red Bull BC One Shop</h2>
                    <div className="merchandise-slider">
                        <ImageSlider>
                            {
                                this.state.products.map( goods => <ShopCard key={goods.id} {...goods}/> )
                            }
                        </ImageSlider>
                    </div>
                    <a className="more-btn" href="#">Show entire collection</a>
                </div>
            </div>
        )
    }
}
