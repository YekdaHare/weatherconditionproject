var http = require('http'); 
var url = 'https://api.openweathermap.org/data/2.5/forecast?q=Mersin,TR&appid=4fd41a5fef381370cb1ce445f3d2288e';

var server = http.createServer(function(request,response){
    var request = require ('request');
    request(url,function(err,res,body){
        var data = JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<h1>" + 'ŞEHİR İSMİ:' + data['name'] + '<br>' + "</h1>");
        response.write("<h2>" + 'SICAKLIK: ' + data.main['temp'] + '<br>' + "</h2>");
        response.write("<h2>" + 'GÜN BATIMI: ' + new Date(data.sys['sunset']*1000) + "</h2>");
        response.write("</div></body></html>");
        response.end();
    });
    

}).listen(8000);