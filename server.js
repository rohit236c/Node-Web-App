const request = require('request');

const url = 'https://api.darksky.net/forecast/5ade034ffc85861ad8d8b4234d07f9aa/37.8267,-122.4233';

request({url : url, json : true},(err,response)=>{
    // console.log(response);
   console.log('It is ' + response.body.currently.temperature + ' degress out there');
})