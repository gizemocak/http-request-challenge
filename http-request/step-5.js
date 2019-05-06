var getHTML = require('./step-5-http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};

function printHTML(html) {
    console.log(html);
    return true;
}

getHTML(requestOptions, printHTML);