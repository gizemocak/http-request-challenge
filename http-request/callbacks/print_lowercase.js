let getHTML = require('../step-5-http-functions')

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
};

function printUpperCase(html) {

    console.log(html.toLowerCase())

}

getHTML(requestOptions, printUpperCase);