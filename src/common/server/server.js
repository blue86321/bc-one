const express = require('express');
const app = express();
const axios = require('axios')

// to start: 'node server.js'

// call it when receiving request
app.use((request, resposne, next) => {
    console.log("someone is querying server1");
    console.log("request from:", request.get("Host"));
    console.log("request url:", request.url);
    next()
})

app.get('/test', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('test 123');
})

const host = "https://www.redbull.com"
const topStoryUrl = "/v3/api/graphql/v1/v3/feed/en-INT%3Een-INT/related-to/rrn:content:event-series:ae51bd1a-19d3-4050-ac35-837c734ea1bb"
app.get(topStoryUrl, (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    const params = {
        "scoring":"featured",
        "score.featured.localeMixing":"en-INT",
        "&score.featured.subType":"featured",
        "disableUsageRestrictions":true,
        "rb3Schema":"v1:hubHeroContent",
    }
    
    axios.get(host+topStoryUrl, {params}).then(res=>response.send(res.data))
    
})

app.listen(5000, err => {
    if(!err) console.log("server start successfully.")
})