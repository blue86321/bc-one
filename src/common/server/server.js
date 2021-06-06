const express = require('express');
const app = express();
const axios = require('axios')

// to start: 'node server.js'


// call it when receiving request
app.use((request, response, next) => {
    // console.log("request from:", request.get("Host"));
    console.log("request url:", request.url);
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

// 1.story (topStory + moreStories); 8.Aside
app.get("/v3/api/graphql/v1/v3/*", (request, response) => {
    axios.get(host+request.url, {headers}).then(res => response.send(res.data), reason => response.send(reason));
})

// // 5.sponser; 6.eventGallery; 7.contactInfo
// app.get("/v3/api/graphql/v1/v3/query/en-INT", (request, response) => {
//     axios.get(host+request.url, {headers}).then(res => response.send(res.data), reason => response.send(reason));
// })

// // 3.event (upcomingEvent);
// const upcomingEvent = "/v3/api/graphql/v1/v3/query/en-INT%3Ear-MEA%3Eaz-AZ%3Ebg-BG%3Ebs-BA%3Ecs-CZ%3Eda-DK%3Ede-AT%3Ede-CH%3Ede-DE%3Ede-INT%3Ear-EG%3Eel-GR%3Een-AU%3Een-CA%3Een-CAR%3Een-GB%3Een-IE%3Een-IN%3Een-MEA%3Een-MK%3Een-MY%3Een-PH%3Een-NZ%3Een-SE%3Een-SG%3Een-US%3Een-ZA%3Ees-AR%3Ees-CAR%3Ees-CL%3Ees-CO%3Ees-ES%3Ees-INT%3Ees-MX%3Ees-PE%3Eet-EE%3Efi-FI%3Efr-BE%3Efr-CA%3Efr-CH%3Efr-DZ%3Efr-FR%3Efr-INT%3Ehr-HR%3Ehu-HU%3Eid-ID%3Eit-IT%3Eja-JP%3Een-KE%3Eko-KR%3Elt-LT%3Elv-LV%3Enl-BE%3Enl-NL%3Eno-NO%3Epl-PL%3Ept-BR%3Ept-PT%3Ero-RO%3Eru-RU%3Esk-SK%3Esl-SI%3Eth-TH%3Etr-TR%3Euk-UA%3Ezh-CN%3Ezh-HK%3Ezh-TW%3Ekk-KZ%3Esq-AL%3Esr-RS%3Een-PK%3Een-NG%3Ees-LAT%3Emk-MK";
// app.get(upcomingEvent, (request, response) => {
//     axios.get(host+request.url, {headers}).then(res => response.send(res.data), reason => response.send(reason));
// })

// // 2.event (pastEvent);
// const pastEvent = "/v3/api/graphql/v1/v3/feed/en-INT%3Ear-MEA%3Eaz-AZ%3Ebg-BG%3Ebs-BA%3Ecs-CZ%3Eda-DK%3Ede-AT%3Ede-CH%3Ede-DE%3Ede-INT%3Ear-EG%3Eel-GR%3Een-AU%3Een-CA%3Een-CAR%3Een-GB%3Een-IE%3Een-IN%3Een-MEA%3Een-MK%3Een-MY%3Een-PH%3Een-NZ%3Een-SE%3Een-SG%3Een-US%3Een-ZA%3Ees-AR%3Ees-CAR%3Ees-CL%3Ees-CO%3Ees-ES%3Ees-INT%3Ees-MX%3Ees-PE%3Eet-EE%3Efi-FI%3Efr-BE%3Efr-CA%3Efr-CH%3Efr-DZ%3Efr-FR%3Efr-INT%3Ehr-HR%3Ehu-HU%3Eid-ID%3Eit-IT%3Eja-JP%3Een-KE%3Eko-KR%3Elt-LT%3Elv-LV%3Enl-BE%3Enl-NL%3Eno-NO%3Epl-PL%3Ept-BR%3Ept-PT%3Ero-RO%3Eru-RU%3Esk-SK%3Esl-SI%3Eth-TH%3Etr-TR%3Euk-UA%3Ezh-CN%3Ezh-HK%3Ezh-TW%3Ekk-KZ%3Esq-AL%3Esr-RS%3Een-PK%3Een-NG%3Ees-LAT%3Emk-MK";
// app.get(pastEvent, (request, response) => {
//     axios.get(host+request.url, {headers}).then(res => response.send(res.data), reason => response.send(reason));
// })

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