const express = require('express');
const app = express();
const axios = require('axios')

// to start: 'node server.js'


// call it when receiving request
app.use((request, response, next) => {
    // console.log("request from:", request.get("Host"));
    // console.log("request url:", request.url);
    response.setHeader('Access-Control-Allow-Origin', '*');
    next()
})

app.get('/test', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('test 123');
})

const host = "https://www.redbull.com";
const headers = {
    "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
}

// 1.story (topStory + moreStories); 2.event (pastEvent); 8.Aside
app.get("/v3/api/graphql/v1/v3/feed/en-INT", (request, response) => {
    axios.get(host+request.url, {headers}).then(res => response.send(res.data), reason => response.send(reason));
})

// 3.event (upcomingEvent); 5.sponser; 6.eventGallery; 7.contactInfo
app.get("/v3/api/graphql/v1/v3/query/en-INT", (request, response) => {
    axios.get(host+request.url, {headers}).then(res => response.send(res.data), reason => response.send(reason));
})

// 4.shop
const shopHost = "https://addons-bcone.redbull.com";
const shopURL = "/php/rb-alpha-shop-feed.php";
app.get(shopURL, (request, response) => {
    axios.get(shopHost+request.url, {headers}).then(res => response.send(res.data), reason => response.send(reason));
})


// listen port
app.listen(5000, err => {
    if(!err) console.log("server start successfully.")
})