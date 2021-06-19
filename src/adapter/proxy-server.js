const express = require('express');
const app = express();
const axios = require('axios')

// call it when receiving request
app.use((request, response, next) => {
    // console.log("request from:", request.get("Host"));
    console.log("request url:", request.url);
    response.setHeader('Access-Control-Allow-Origin', '*');
    next()
})

// 1.all RedBull BC ONE query, except shop
const host = "https://www.redbull.com";
const headers = {
    "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
}
app.get("/v3/api/graphql/v1/v3/*", (request, response) => {
    axios.get(host+request.url, {headers}).then(res => response.send(res.data), reason => response.send(reason));
})

// 2.shop
const shopHost = "https://addons-bcone.redbull.com";
const shopURL = "/php/rb-alpha-shop-feed.php";
app.get(shopURL, (request, response) => {
    axios.get(shopHost+request.url, {headers}).then(res => response.send(res.data), reason => response.send(reason));
})


// listen port
app.listen(5000, err => {
    if(!err) console.log("server start successfully.")
})